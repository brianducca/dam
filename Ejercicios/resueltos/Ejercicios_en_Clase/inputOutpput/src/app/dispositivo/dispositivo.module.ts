import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispositivoComponent } from './dispositivo.component';



@NgModule({
  declarations: [DispositivoComponent],
  imports: [
    CommonModule
  ],
  exports:[DispositivoComponent]
})
export class DispositivoModule { }
