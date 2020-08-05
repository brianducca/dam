import { Component } from '@angular/core';
import { DispositivoService } from '../services/dispositivo.service';
import {Dispositivo} from '../model/dispositivo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listadoDispositivo:Dispositivo[];

  constructor(public dispositivoServ:DispositivoService) {
    dispositivoServ.getListadoDispositivos().then(lst=>{
      this.listadoDispositivo=lst;
    })
  }

}
