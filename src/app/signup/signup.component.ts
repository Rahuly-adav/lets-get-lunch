import { Component, OnInit } from '@angular/core';
import { User } from '../services/auth/user';
import { AuthService } from '../services/auth/auth.service';
import { DietPreferencesService } from '../services/diet-preferences/diet-preferences.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = { 'username': '', password: '' };
  dietPreferences: any;
  errorMessahe: string;

  errorMessage : string;

  constructor(private authService: AuthService, private dietaryPreferencesService: DietPreferencesService, private router: Router) { }

  ngOnInit(): void {
    this.dietPreferences = this.dietaryPreferencesService.getDietaryPreferences();
  }
  signup(credentials : User) {
    credentials.dietPreferences = this.getSelectedPreferences();
    this.authService.signup(credentials).subscribe(res => {
      console.log('res ', res);
      this.router.navigate(['/dashboard']);
    }, err => {
      this.errorMessage = err.error.message;
    });
  }

  getSelectedPreferences(){
    return this.dietPreferences
    .filter((preference : any) => {
      if (preference.checked === true) { return preference; }
    })
    .map((preference: any) => {
      return preference.name;
    });
  }

  onPrefCheck(index : number){
    if(this.dietPreferences[index].checked === true){
      this.dietPreferences[index].checked = false;
    }else{
      this.dietPreferences[index].checked = true;
    }
  }

}

