import { Component, OnInit } from '@angular/core';
import { ListadoService } from '../services/listado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  nombre:string="Jose";
  apellido:string="Perez";
  textoBtn:string="Aceptr"
  estaHabilitado:boolean=true;

  miArray;


  constructor(public listadoServ:ListadoService) { 
    this.miArray=listadoServ.getDispositivos();
    // console.log(listadoServ.getDispositivos());
  }

  ngOnInit(): void {
  }

  public logConsola(){
    console.log("Aceptar");
    console.log(this.nombre);
    console.log(this.apellido);
  }

  cambiar(){
    console.log(this.estaHabilitado);
    this.estaHabilitado=!this.estaHabilitado;
    console.log("Lo cambio por " + this.estaHabilitado);
  }

  manejarCambio(e){
    console.log("Llega del hijo esto :" +JSON.stringify(e));
  }

}
