import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicion } from '../model/medicion'

@Injectable({
  providedIn: 'root'
})
export class MedicionService {
  urlApi="http://localhost:3000";
  
  constructor(private _http: HttpClient ) {
   }

  getMedicionByIdDispositivo(id):Promise<Medicion>{     
    return this._http.get(this.urlApi+"/api/medicion/"+id).toPromise().then((med:Medicion)=>{
      return med;
    });
  };

  getMedicionesByIdDispositivo(id):Promise<Medicion[]>{     
    return this._http.get(this.urlApi+"/api/medicion/"+id+"/todas").toPromise().then((mediciones:Medicion[])=>{
      return mediciones;
    });
  };

  agregarMedicion(medicion:Medicion){
    return this._http.post(this.urlApi+"/api/medicion/agregar",{fecha:medicion.fecha,valor:medicion.valor,dispositivoId:medicion.dispositivoId}).toPromise().then((result)=>{
      return result;
    });
  }
}
