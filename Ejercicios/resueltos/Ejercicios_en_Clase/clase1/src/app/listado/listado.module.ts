import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from '../listado/listado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListadoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ListadoComponent]
})
export class ListadoModule { }
