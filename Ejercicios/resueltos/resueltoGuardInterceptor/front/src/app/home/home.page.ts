import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private _homeServ:HomeService) {}

  consultar(){
    this._homeServ.consulta().then((respuesta)=>{
      console.log("llego algo : " + respuesta)
    });
  }

}
