import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MandarCorreoPageRoutingModule } from './mandar-correo-routing.module';

import { MandarCorreoPage } from './mandar-correo.page';
import { SharedModule } from 'src/app/componentes/shared.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MandarCorreoPageRoutingModule,
    SharedModule
  ],
  declarations: [MandarCorreoPage]
})
export class MandarCorreoPageModule {}
