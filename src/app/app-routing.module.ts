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
  {
    path: 'apoderado/notas',
    loadChildren: () => import('./paginas/apoderado/notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'apoderado/mensajes',
    loadChildren: () => import('./paginas/apoderado/mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },
  {
    path: 'apoderado/informacion',
    loadChildren: () => import('./paginas/apoderado/informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'profesor/subir-notas',
    loadChildren: () => import('./paginas/profesor/subir-notas/subir-notas.module').then( m => m.SubirNotasPageModule)
  },
  {
    path: 'profesor/mandar-correo',
    loadChildren: () => import('./paginas/profesor/mandar-correo/mandar-correo.module').then( m => m.MandarCorreoPageModule)
  },
  {
    path: 'profesor/clases',
    loadChildren: () => import('./paginas/profesor/clases/clases.module').then( m => m.ClasesPageModule)
  },
  {
    path: 'profesor/pasar-asistencia',
    loadChildren: () => import('./paginas/profesor/pasar-asistencia/pasar-asistencia.module').then( m => m.PasarAsistenciaPageModule)
  },
  {
    path: 'profesor/anotaciones',
    loadChildren: () => import('./paginas/profesor/anotaciones/anotaciones.module').then( m => m.AnotacionesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
