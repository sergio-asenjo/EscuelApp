import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-notificaciones',
  templateUrl: './card-notificaciones.component.html',
  styleUrls: ['./card-notificaciones.component.scss'],
})
export class CardNotificacionesComponent implements OnInit {
  @Input() datosNotificacion: INotificacion = {
    titulo: 'Prueba de Lenguaje',
    clase: '2° Medio B',
    cuerpoNotificacion: 'Se avisa a los apoderados que el próximo miércoles 8 de Junio se llevará a cabo la penúltima prueba de Lenguaje.',
    esRevisada: false,
  };

  constructor() { }

  ngOnInit() {}

}

interface INotificacion {
  titulo: string;
  clase: string;
  cuerpoNotificacion: string;
  esRevisada: boolean;
}