import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicionesPage } from './mediciones.page';

const routes: Routes = [
  {
    path: '',
    component: MedicionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicionesPageRoutingModule {}
