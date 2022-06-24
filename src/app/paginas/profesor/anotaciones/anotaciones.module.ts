import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnotacionesPageRoutingModule } from './anotaciones-routing.module';

import { AnotacionesPage } from './anotaciones.page';

import { SharedModule } from 'src/app/componentes/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnotacionesPageRoutingModule,
    SharedModule
  ],
  declarations: [AnotacionesPage]
})
export class AnotacionesPageModule {}


