import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BotonModuloComponent } from './boton-modulo/boton-modulo.component';
import { CardNotificacionesComponent } from './card-notificaciones/card-notificaciones.component';
import { HeaderComponent } from './header/header.component';
import { TablaNotasComponent } from './tabla-notas/tabla-notas.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BotonModuloComponent,
    CardNotificacionesComponent,
    TablaNotasComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    HeaderComponent,
    BotonModuloComponent,
    CardNotificacionesComponent,
    TablaNotasComponent,
  ],
})
export class SharedModule {}
