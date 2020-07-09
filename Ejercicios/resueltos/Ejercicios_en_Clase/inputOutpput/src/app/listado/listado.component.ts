import { Component, OnInit } from '@angular/core';
import { ListadoService } from '../services/listado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  miArray;

  constructor(public listadoServ:ListadoService) { 
    console.log(listadoServ.getDispositivos());
    this.miArray=listadoServ.getDispositivos();
  }

  ngOnInit(): void {
  }

  manejarCambios(e){
    console.log(e);
  }

}
