import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { of } from 'rxjs'
import { SignupComponent } from 'src/app/signup/signup.component';

describe('AuthService', () => {
  let authService: AuthService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    authService = TestBed.get(AuthService);
    http = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });


  describe('signup', () => {

    it('should return a token with a valid username and password', () => {
      const user = { 'username': 'myUser', 'password': 'password' };

      const signupResponse = {
        "__v": 0,
        "username": 'myUser',
        "password": '$2a$10$oF7YW1FyOSW3Gw7G4ThbO.ibduCgF3U0gVI/GE9fKQcGtVEBs0B.2',
        "_id": '5a550ea739fbc4ca3ee0ce58',
        "dietPreferences": []
      };

      const loginResponse ={
        'token': 's3cr3tt0ken'
      }
      let response: any;

      authService.signup(user).subscribe(res => {
        response = res;
      });
      spyOn(authService, 'login').and.callFake(() => of(loginResponse));

      http.expectOne('http://localhost:3000/api/users').flush(signupResponse);
      expect(response).toEqual(loginResponse);
      expect(authService.login).toHaveBeenCalled();
      http.verify();
    });

    it('should return an error for an invalid user object', () => {
      const user = { username: 'myUser', password: 'pswd' };
      const signupResponse = 'Your Password must be at least 5 characters long.';
      let errorResponse: any;

      authService.signup(user).subscribe(res => {}, err => {
        errorResponse = err;
      });

      http.expectOne('http://localhost:3000/api/users')
        .flush({ message: signupResponse }, { status: 400, statusText: 'Bad Request' });
      expect(errorResponse.error.message).toEqual(signupResponse);
      http.verify();
    });


  });

  describe('login', () => {
    it('should return a token with a valid username and password', () => {
      const user = { 'username': 'myUser', 'password': 'password'};
      const loginResponse = { 'token': 's3cr3tt0ken' };
      let response: any;

      authService.login(user).subscribe(res => {
        response = res;
      });
      http.expectOne('http://localhost:3000/api/sessions').flush(loginResponse);
      expect(response).toEqual(loginResponse);
      expect(localStorage.getItem('Authorization')).toEqual('s3cr3tt0ken');
      http.verify();
    });
  });
});