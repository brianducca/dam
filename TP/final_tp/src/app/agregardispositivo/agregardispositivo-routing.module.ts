import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregardispositivoPage } from './agregardispositivo.page';

const routes: Routes = [
  {
    path: '',
    component: AgregardispositivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregardispositivoPageRoutingModule {}
