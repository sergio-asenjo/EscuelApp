import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasarAsistenciaPageRoutingModule } from './pasar-asistencia-routing.module';

import { PasarAsistenciaPage } from './pasar-asistencia.page';


import { SharedModule } from 'src/app/componentes/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasarAsistenciaPageRoutingModule,
    SharedModule
  ],
  declarations: [PasarAsistenciaPage]
})
export class PasarAsistenciaPageModule {}
