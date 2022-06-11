import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-subir-notas',
  templateUrl: './subir-notas.page.html',
  styleUrls: ['./subir-notas.page.scss'],
})
export class SubirNotasPage {
  public listadoAlumnos: Alumno[] = [
    { nombre: 'Maximino Yañez', puntaje: 0},
    { nombre: 'Ane Patiño', puntaje: 0},
    { nombre: 'Luis Carlos Raya', puntaje: 0},
    { nombre: 'Enzo Matas', puntaje: 0},
    { nombre: 'Monica Martínez', puntaje: 0},
    { nombre: 'Remedios Ubeda', puntaje: 0},
    { nombre: 'Latifa Casado', puntaje: 0},
    { nombre: 'Yeray Aznar', puntaje: 0},
    { nombre: 'Marwa Juan', puntaje: 0},
    { nombre: 'Sabina Ojeda', puntaje: 0},
    { nombre: 'Carles Calvo', puntaje: 0},
    { nombre: 'Antonia Aguirre', puntaje: 0},
  ];
  public esMostrarAlumnos: boolean = false;
  public puntajeMaximo: number = 150;
  public porcentajeExigencia: number = 60;
  public clase: string = '';
  public fechaHoy: Date = new Date();

  constructor(private loader: LoadingController) { }

  mostrarAlumnos(clase: string) {
    this.esMostrarAlumnos = true;
    this.clase = clase;
  }

  calcularNota(puntaje: number) {
    const exigencia = this.porcentajeExigencia / 100;
    if (puntaje < exigencia * this.puntajeMaximo) {
      return ((3 * (puntaje / (exigencia * this.puntajeMaximo))) + 1);
    } else if (puntaje >= exigencia * this.puntajeMaximo) {
      return ((3 * ((puntaje - (exigencia * this.puntajeMaximo)) / (this.puntajeMaximo * (1 - exigencia)))) + 4);
    }
  }

  async guardarNotas() {
    await this.mostrarCargaNotas();
    await new Promise((r) => setTimeout(r, 3000));
    await this.mostrarMensajeFinalizacion();
    await new Promise((r) => setTimeout(r, 3000));
    this.esMostrarAlumnos = false;
    this.reiniciarData();
  }

  private async mostrarCargaNotas() {
    const loading = await this.loader.create({
      cssClass: 'loader-asistencia',
      message: 'Guardando Notas...',
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
      message: '¡Notas registradas exitosamente!',
      mode: 'ios',
      duration: 3000,
      backdropDismiss: false,
      spinner: null,
    });
    await loading.present();
  }

  private reiniciarData() {
    this.puntajeMaximo = 150;
    this.porcentajeExigencia = 60;
    this.listadoAlumnos.forEach((alumno) => {
      alumno.puntaje = 0;
    });
  }
}

interface Alumno {
  nombre: string;
  puntaje: number;
}
