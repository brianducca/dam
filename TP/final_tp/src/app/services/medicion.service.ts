import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicion } from '../model/Medicion';

@Injectable({
  providedIn: 'root'
})
export class MedicionService {

  urlApi="http://localhost:8000";

  constructor(private _http: HttpClient) { }

  

  getMedicionesByIdDispositivo(id):Promise<Medicion[]>{     
    return this._http.get(this.urlApi+`/api/dispositivos/${id}/mediciones`).toPromise().then((mediciones:Medicion[])=>{
      return mediciones;
    });
  };

  addMedicion(medicion:Medicion){
    return this._http.post(this.urlApi+"/api/mediciones",{fecha:medicion.fecha,valor:medicion.valor,dispositivoId:medicion.dispositivoId}).toPromise().then((result)=>{
      return result;
    });
  }
}
