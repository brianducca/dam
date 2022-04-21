import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dispositivo } from '../model/Dispositivo';
import { Medicion } from '../model/Medicion';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  urlApi="http://localhost:8000";
  
  constructor(private _http: HttpClient ) {
    
   }

   getListadoDispositivos():Promise<Dispositivo[]>{
    return this._http.get(this.urlApi+ "/api/dispositivos").toPromise().then((listado:Dispositivo[])=>{
      return listado;
    });
  }

   getDispositivo(id: number):Promise<Dispositivo>{
    let url = this.urlApi+`/api/dispositivos/${id}`;
    return this._http.get(url).toPromise().then((dispositivo:Dispositivo)=>{
      return dispositivo[0];
      });
   }

   getUltimaMedicion(id: number):Promise<Medicion>{
    let url = this.urlApi+`/api/dispositivos/${id}/ultima-medicion`;
    console.log('url:'+url);
    return this._http.get(url).toPromise().then((medicion:Medicion)=>{
      return medicion[0];
    });

  }

  changeStatusElectrovalvula(open:Boolean, id: number){
    let url = null;
    if(open) {
      url =  this.urlApi+`/api/electrovalvulas/${id}/open`;
    } else {
      url =  this.urlApi+`/api/electrovalvulas/${id}/close`;
    }
   
    return this._http.put(url, null).toPromise().then(()=>{
      
    });
  }

  postDispositivo(nombre:string, ubicacion: string, nombreElectrovalvula:string){
    let url = this.urlApi+"/api/dispositivos";
    let body = {
      nombre:nombre,
      ubicacion:ubicacion,
      electrovalvula:nombreElectrovalvula
    };
    return this._http.post(url, body).toPromise().then(()=>{
      
    });
    }

    deleteDispositivo(id:number) {
      let url = this.urlApi+`/api/dispositivos/${id}`;

      return this._http.delete(url).toPromise().then(()=>{
      
      });
    }


}
