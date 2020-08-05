import { Injectable } from '@angular/core';
import { Dispositivo } from '../model/Dispositivo';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
 urlApi="http://localhost:3000";
  // listado:Array<Dispositivo> = new Array<Dispositivo>();
  
  constructor(private _http: HttpClient ) {
   }
 

   getListadoDispositivos():Promise<Dispositivo[]>{
    return this._http.get(this.urlApi+ "/api/dispositivo/").toPromise().then((listado:Dispositivo[])=>{
      return listado;
    });
  }

  getDispositivo(id):Promise<Dispositivo>{     
    return this._http.get(this.urlApi+"/api/dispositivo/"+id).toPromise().then((dispositivo:Dispositivo)=>{
      return dispositivo;
    });
  };
  
}
