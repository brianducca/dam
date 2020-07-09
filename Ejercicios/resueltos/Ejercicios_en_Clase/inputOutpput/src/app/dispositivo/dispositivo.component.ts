import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'dispositivo',
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.css']
})
export class DispositivoComponent implements OnInit {

  @Input() dispositivo;
  @Output() onChange= new EventEmitter();
  
  constructor() {
    console.log(this.dispositivo);
   }

  ngOnInit(): void {
  }

  cambiarD(){
    this.dispositivo.nombre="cambiado";
    this.onChange.emit(this.dispositivo);
  }

}
