import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasarAsistenciaPageRoutingModule } from './pasar-asistencia-routing.module';

import { PasarAsistenciaPage } from './pasar-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasarAsistenciaPageRoutingModule
  ],
  declarations: [PasarAsistenciaPage]
})
export class PasarAsistenciaPageModule {}
