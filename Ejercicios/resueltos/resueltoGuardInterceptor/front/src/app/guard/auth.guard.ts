import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginSrv: LoginService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
    console.log("Evalua el guard")
    if (!this.loginSrv.logIn){
      this.router.navigate(['/login']);
    }
    console.log(this.loginSrv.logIn)
    return this.loginSrv.logIn;
  }
  
}
