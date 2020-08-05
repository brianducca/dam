import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicion } from '../model/Medicion';
import { MedicionService } from '../services/medicion.service';
import * as moment from 'moment';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {

  public medicion:Medicion;
  public idDispositivo:string;
  constructor(private router:ActivatedRoute, private mServ:MedicionService) { }

  ngOnInit() {

    this.idDispositivo = this.router.snapshot.paramMap.get('id');
    this.mServ.getMedicionByIdDispositivo(this.idDispositivo).then((med)=>{
      this.medicion=med;
    });


    this.mServ.getMedicionesByIdDispositivo(this.idDispositivo).then((med)=>{
      console.log(med)
    });

   //6
    let a : Medicion= new Medicion(99,moment().format("YYYY-MM-DD hh:mm:ss"),99,1);
    this.mServ.agregarMedicion(a).then((med)=>{
      console.log(med)
    });
  }



}
