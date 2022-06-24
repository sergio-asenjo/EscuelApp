import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-mandar-correo',
  templateUrl: './mandar-correo.page.html',
  styleUrls: ['./mandar-correo.page.scss'],
})
export class MandarCorreoPage{

  constructor(private loadingCtrl: LoadingController, private router: Router) { }

  public async enviar() {
    await this.mostrarCarga('Enviando Mensaje...', true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    await this.mostrarCarga('¡Mensaje enviado correctamente!', false);
    await new Promise(resolve => setTimeout(resolve, 2000));
    this.router.navigate(['profesor/inicio']);

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
