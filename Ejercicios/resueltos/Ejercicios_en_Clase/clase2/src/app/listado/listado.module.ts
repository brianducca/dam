import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from '../listado/listado.component';
import { FormsModule } from '@angular/forms';
import { NombrePipePipe } from '../pipes/nombre-pipe.pipe';
import { DirectivaAttrDirective } from '../directives/directiva-attr.directive';

@NgModule({
  declarations: [ListadoComponent,NombrePipePipe, DirectivaAttrDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ListadoComponent]
})
export class ListadoModule { }
