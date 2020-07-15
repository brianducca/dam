import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from '../listado/listado.component';
import { FormsModule } from '@angular/forms';
import { NombrePipePipe } from '../pipes/nombre-pipe.pipe';
import { DirectivaAttrDirective } from '../directives/directiva-attr.directive';
import { DispositivoComponent } from '../dispositivo/dispositivo.component';


@NgModule({
  declarations: [ListadoComponent, DispositivoComponent,NombrePipePipe, DirectivaAttrDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ListadoComponent,DispositivoComponent]
})
export class ListadoModule { }
