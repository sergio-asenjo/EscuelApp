import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasesPageRoutingModule } from './clases-routing.module';

import { ClasesPage } from './clases.page';

import { SharedModule } from 'src/app/componentes/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasesPageRoutingModule,
    SharedModule
  ],
  declarations: [ClasesPage]
})
export class ClasesPageModule {}
