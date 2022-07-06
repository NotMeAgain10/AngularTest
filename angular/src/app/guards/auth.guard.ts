import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService,private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.authenticate.pipe(map((res) => {
 
      if(!this.authService.user) {
        this.router.navigate(['login'])
        return false
      }

      if(route.routeConfig?.path === "login") {
        this.router.navigate([''])
        return false
      }
      return !!this.authService.user
    }),catchError(err => {
      this.router.navigate(['login'])
      this.authService.logout()
      return of(false)
    }))
  }
  
}
