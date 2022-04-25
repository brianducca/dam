import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _loginSrv: LoginService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
    console.log("Evalua el guard")
    if (!this._loginSrv.logIn){
      this.router.navigate(['/login']);
    }
    console.log("Tengo token: " + this._loginSrv.logIn);
    return this._loginSrv.logIn;
  }
  
}
