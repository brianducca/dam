import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicion } from '../model/Medicion';
import { MedicionService } from '../services/medicion.service';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
})
export class MedicionesPage implements OnInit {

  listadoMediciones:Medicion[];

  constructor(private router:ActivatedRoute, private mServ:MedicionService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let idDispositivo= this.router.snapshot.paramMap.get('id');
    console.log(`idDispositivo:${idDispositivo}`)
    this.callGetMediciones(Number.parseInt(idDispositivo));

  }

  async callGetMediciones(idDispositivo:number){
    let listado= await this.mServ.getMedicionesByIdDispositivo(idDispositivo);
    this.listadoMediciones=listado;
  }


}
