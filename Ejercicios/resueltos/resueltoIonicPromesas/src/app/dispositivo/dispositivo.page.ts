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
    //opción 1- utilizar libreria Momentjs , haciendo npm install --save moment y luego el import * as moment from 'moment'; en donde lo necesitemos.
    // let a : Medicion= new Medicion(99,moment().format("YYYY-MM-DD hh:mm:ss"),99,1);

    //opción 2, utilizar el objeto Date y hacer el formato necesario a mano.
    let current_datetime = new Date()
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds() 
    let a : Medicion= new Medicion(99,formatted_date,99,1);
   
    this.mServ.agregarMedicion(a).then((med)=>{
      console.log(med)
    });
    
  }




}
