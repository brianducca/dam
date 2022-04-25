import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'dispositivo/:id',
    loadChildren: () => import('./dispositivo/dispositivo.module').then( m => m.DispositivoPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'dispositivo/:id/logs',
    loadChildren: () => import('./logs/logs.module').then( m => m.LogsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'dispositivo/:id/mediciones',
    loadChildren: () => import('./mediciones/mediciones.module').then( m => m.MedicionesPageModule),
    canActivate:[AuthGuard]
  },
  
  {
    path: 'agregardispositivo',
    loadChildren: () => import('./agregardispositivo/agregardispositivo.module').then( m => m.AgregardispositivoPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
