import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate():
    Observable<boolean> |
    Promise<boolean> |
    boolean {
      if ( this.authService.isLoggedIn()){
        return true;
      } else {
        // TODO Redirect to login
        this.router.navigate(['/']);
        return false; 
      }
    }

}
