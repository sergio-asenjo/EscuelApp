import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasarAsistenciaPage } from './pasar-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: PasarAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasarAsistenciaPageRoutingModule {}
