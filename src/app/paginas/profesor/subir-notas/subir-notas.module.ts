import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubirNotasPageRoutingModule } from './subir-notas-routing.module';

import { SubirNotasPage } from './subir-notas.page';
import { SharedModule } from 'src/app/componentes/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubirNotasPageRoutingModule
    ,SharedModule
  ],
  declarations: [SubirNotasPage]
})
export class SubirNotasPageModule {}
