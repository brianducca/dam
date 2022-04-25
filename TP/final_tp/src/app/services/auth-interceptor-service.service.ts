import { AlertController } from '@ionic/angular';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private _router:Router, private alertCtrl: AlertController) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes("/authenticate")){
      return next.handle(req) .pipe(catchError((error: HttpErrorResponse) => {
        let msg = error.message;

        this.showAlert(msg);

        // Pass the error to the caller of the function
        return throwError(msg);
      })
      );;
    }
    const token: string = localStorage.getItem('token');
    // console.log("TOKEN EN LA REQUEST "+token)
    let request = req;

    if (token) {
      request = this.agregarToken(request, token);
      // console.log(request);
      return next.handle(request)
      .pipe(catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('Error del lado Cliente');
          errorMsg = `Error: ${error.error.message}`;
        }
        else {
          console.log('Error del lado del Server');
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        console.log(errorMsg);
        return throwError(errorMsg);
      })
      );
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

  async showAlert(msg:string) {
    let alert = this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: 'Error en login, usuario o password incorrecto',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }
}