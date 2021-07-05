import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private _router:Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes("/login")) {
      return next.handle(req);
    }
    const token: string = localStorage.getItem('token');
    // console.log("TOKEN EN LA REQUEST "+token)
    let request = req;

    if (token) {
      request = this.agregarToken(request, token);
      // console.log(request);
      return next.handle(request).pipe( tap(() => {},
        (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
           return;
          }
          this._router.navigate(['/login']);
        }
      }));
    }else{
      //si no tengo token, voy al login
      this._router.navigate(['/login']);
    }
    
  }

  private agregarToken(request: HttpRequest<any>, token: string) {
     console.log("Agrego token",`Bearer ${token}`)
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}
