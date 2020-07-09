import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from '../listado/listado.component';
import { FormsModule } from '@angular/forms';
import { NombrePipePipe } from '../pipes/nombre-pipe.pipe';
import { DirectivaAttrDirective } from '../directives/directiva-attr.directive';
import { DispositivoModule } from '../dispositivo/dispositivo.module';

@NgModule({
  declarations: [ListadoComponent,NombrePipePipe, DirectivaAttrDirective],
  imports: [
    CommonModule,
    FormsModule,
    DispositivoModule
  ],
  exports:[ListadoComponent]
})
export class ListadoModule { }
