import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage{

  constructor(private loadingCtrl: LoadingController, private router: Router) { }

  public async enviar() {
    await this.mostrarCarga('Enviando Mensaje...', true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    await this.mostrarCarga('¡Mensaje enviado correctamente!', false);
    await new Promise(resolve => setTimeout(resolve, 2000));
    this.router.navigate(['apoderado/inicio']);
  }

  async mostrarCarga(mensaje: string, spinner: boolean) {
    const loading = await this.loadingCtrl.create({
      message: mensaje,
      duration: 2000,
    });

    if (spinner) loading.spinner = 'crescent';
    else loading.spinner = undefined;

    await loading.present();
  }
}
