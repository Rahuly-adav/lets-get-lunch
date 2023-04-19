import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: any = localStorage.getItem('Authorization');

    if(token){
      req = req.clone({
        setHeaders: {
          Authorization: token
        }
      });
    }
    return next.handle(req);
  }
}
