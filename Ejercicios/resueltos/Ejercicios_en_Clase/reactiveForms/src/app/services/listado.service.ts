import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  public listadoDispositivos=[{
    nombre:"Dispo 1",
    ubicacion:"cocina"
  },
  {
    nombre:"Dispositivo 2",
    ubicacion:"living"
  }
];
  constructor() { }

  getDispositivos(){
    return this.listadoDispositivos;
  }
}
