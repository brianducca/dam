import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  nombre:string="Jose";
  apellido:string="Perez";
  textoBtn:string="Aceptar"
  estaHabilitado:boolean=true;


  constructor() { }

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

}
