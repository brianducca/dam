import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.css']
})
export class DispositivoComponent implements OnInit {

  @Input() atributoDisp;
  @Output() evento= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.atributoDisp);

  }

  cambiarHijo(parametro){
    parametro.nombre="nombreCambiado";
    this.evento.emit({test:""});
  }

}
