import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage {
  public notificaciones: INotificacion[] = [
    {
      titulo: 'Prueba de Lenjuage',
      clase: '2° Medio B',
      cuerpoNotificacion:
        'Se avisa a los apoderados que el próximo miércoles 8 de Junio se llevará a cabo la penúltima prueba de Lenguaje.',
      esRevisada: false,
    },
    {
      titulo: 'Viaje de Curso',
      clase: '2° Medio B',
      cuerpoNotificacion:
        'Se solicita a apoderados que firmen permisos para que alumnos puedan asistir al viaje de curso planificado para el próximo 20 de Junio.',
      esRevisada: false,
    },
    {
      titulo: 'Prueba de Física',
      clase: '2° Medio B',
      cuerpoNotificacion:
        'Se avisa a los apoderados que el próximo viernes 10 de Junio se llevará a cabo la última prueba de Física.',
      esRevisada: false,
    },
    {
      titulo: 'Día del Alumno',
      clase: 'Liceo DuocUC',
      cuerpoNotificacion:
        'Se invita a todos los apoderados a que puedan asistir a las actividades del día del alumno, el cuál se llevará a cabo el día 11 de Mayo.',
      esRevisada: true,
    },
    {
      titulo: 'Suspensión de Actividades',
      clase: 'Liceo DuocUC',
      cuerpoNotificacion:
        'Estimados apoderados, debido a diversos incidentes ocurridos en el liceo, se suspenderán las actividades del día 29 de Abril, retomando las actividades normales el día 2 de Mayo.',
      esRevisada: true,
    },
  ];

  constructor() { }
}

interface INotificacion {
  titulo: string;
  clase: string;
  cuerpoNotificacion: string;
  esRevisada: boolean;
}
