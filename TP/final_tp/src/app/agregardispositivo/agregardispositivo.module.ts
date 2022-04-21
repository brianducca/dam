import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregardispositivoPageRoutingModule } from './agregardispositivo-routing.module';

import { AgregardispositivoPage } from './agregardispositivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregardispositivoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AgregardispositivoPage]
})
export class AgregardispositivoPageModule {}
