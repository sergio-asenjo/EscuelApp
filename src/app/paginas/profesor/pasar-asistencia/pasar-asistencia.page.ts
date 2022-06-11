import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-pasar-asistencia',
  templateUrl: './pasar-asistencia.page.html',
  styleUrls: ['./pasar-asistencia.page.scss'],
})
export class PasarAsistenciaPage {
  public listadoAlumnos: Alumno[] = [
    { nombre: 'Maximino Yañez', esAsistio: false },
    { nombre: 'Ane Patiño', esAsistio: false },
    { nombre: 'Luis Carlos Raya', esAsistio: false },
    { nombre: 'Enzo Matas', esAsistio: false },
    { nombre: 'Monica Martínez', esAsistio: false },
    { nombre: 'Remedios Ubeda', esAsistio: false },
    { nombre: 'Latifa Casado', esAsistio: false },
    { nombre: 'Yeray Aznar', esAsistio: false },
    { nombre: 'Marwa Juan', esAsistio: false },
    { nombre: 'Sabina Ojeda', esAsistio: false },
    { nombre: 'Carles Calvo', esAsistio: false },
    { nombre: 'Antonia Aguirre', esAsistio: false },
  ];
  public esMostrarAlumnos: boolean = false;
  public clase: string = '';
  public fechaHoy: Date = new Date();

  constructor(private loader: LoadingController) { }

  mostrarAlumnos(clase: string) {
    this.esMostrarAlumnos = true;
    this.clase = clase;
  }

  async registrarAsistencia() {
    await this.mostrarCargaAsistencia();
    await new Promise((r) => setTimeout(r, 3000));
    await this.mostrarMensajeFinalizacion();
    await new Promise((r) => setTimeout(r, 3000));
    this.esMostrarAlumnos = false;
    this.limpiarAsistencia();
  }

  private async mostrarCargaAsistencia() {
    const loading = await this.loader.create({
      cssClass: 'loader-asistencia',
      message: 'Registrando Asistencia...',
      mode: 'ios',
      duration: 3000,
      spinner: 'crescent',
      backdropDismiss: false,
    });
    await loading.present();
  }

  private async mostrarMensajeFinalizacion() {
    const loading = await this.loader.create({
      cssClass: 'mensaje-exito',
      message: '¡Asistencia registrada exitosamente!',
      mode: 'ios',
      duration: 3000,
      backdropDismiss: false,
      spinner: null,
    });
    await loading.present();
  }

  private limpiarAsistencia() {
    this.listadoAlumnos.forEach((alumno) => {
      alumno.esAsistio = false;
    });
  }
}

interface Alumno {
  nombre: string;
  esAsistio: boolean;
}
