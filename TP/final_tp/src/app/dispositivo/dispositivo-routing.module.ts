import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispositivoPage } from './dispositivo.page';

const routes: Routes = [
  {
    path: '',
    component: DispositivoPage
  },

  {
    path: 'dispositivo/:id/mediciones',
    loadChildren: () => import('../mediciones/mediciones.module').then( m => m.MedicionesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispositivoPageRoutingModule {}
