import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MandarCorreoPageRoutingModule } from './mandar-correo-routing.module';

import { MandarCorreoPage } from './mandar-correo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MandarCorreoPageRoutingModule
  ],
  declarations: [MandarCorreoPage]
})
export class MandarCorreoPageModule {}
