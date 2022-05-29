import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'apoderado/inicio',
    loadChildren: () => import('./paginas/apoderado/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'profesor/inicio',
    loadChildren: () => import('./paginas/profesor/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'apoderado/horario',
    loadChildren: () => import('./paginas/apoderado/horario/horario.module').then( m => m.HorarioPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
