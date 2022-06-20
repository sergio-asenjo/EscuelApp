import { Component, Input } from '@angular/core';

@Component({
  selector: 'tabla-notas',
  templateUrl: './tabla-notas.component.html',
  styleUrls: ['./tabla-notas.component.scss'],
})
export class TablaNotasComponent {
  @Input() notasAlumno: IAsignatura[] = [
    {
      nombreAsignatura: 'Lenguaje',
      colorAsignatura: '#4c8dff',
      notas: [
        { nombrePrueba: 'Prueba 1', nota: '7.0' },
        { nombrePrueba: 'Prueba 2', nota: '6.3' },
        { nombrePrueba: 'Prueba 3', nota: '6.5' },
      ]
    },
    {
      nombreAsignatura: 'Matemáticas',
      colorAsignatura: '#9d9fa6',
      notas: [
        { nombrePrueba: 'Prueba 1', nota: '5.9' },
        { nombrePrueba: 'Prueba 2', nota: '6.2' },
        { nombrePrueba: 'Prueba 3', nota: '6.0' },
      ]
    },
    {
      nombreAsignatura: 'Física',
      colorAsignatura: '#ed576b',
      notas: [
        { nombrePrueba: 'Prueba 1', nota: '6.2' },
        { nombrePrueba: 'Prueba 2', nota: '5.5' },
        { nombrePrueba: 'Prueba 3', nota: '6.3' },
      ]
    },
    {
      nombreAsignatura: 'Química',
      colorAsignatura: '#ffca22',
      notas: [
        { nombrePrueba: 'Prueba 1', nota: '6.2' },
        { nombrePrueba: 'Prueba 2', nota: '5.5' },
        { nombrePrueba: 'Prueba 3', nota: '6.3' },
      ]
    },
    {
      nombreAsignatura: 'Inglés',
      colorAsignatura: '#6370ff',
      notas: [
        { nombrePrueba: 'Prueba 1', nota: '6.2' },
        { nombrePrueba: 'Prueba 2', nota: '5.5' },
        { nombrePrueba: 'Prueba 3', nota: '6.3' },
      ]
    },
    {
      nombreAsignatura: 'Educación Física',
      colorAsignatura: '#50c8ff',
      notas: [
        { nombrePrueba: 'Prueba 1', nota: '6.2' },
        { nombrePrueba: 'Prueba 2', nota: '5.5' },
        { nombrePrueba: 'Prueba 3', nota: '6.3' },
      ]
    },
    {
      nombreAsignatura: 'Historia y Ciencias Sociales',
      colorAsignatura: '#595959',
      notas: [
        { nombrePrueba: 'Prueba 1', nota: '6.2' },
        { nombrePrueba: 'Prueba 2', nota: '5.5' },
        { nombrePrueba: 'Prueba 3', nota: '6.3' },
      ]
    },
    {
      nombreAsignatura: 'Artes Musicales',
      colorAsignatura: '#29c467',
      notas: [
        { nombrePrueba: 'Prueba 1', nota: '6.2' },
        { nombrePrueba: 'Prueba 2', nota: '5.5' },
        { nombrePrueba: 'Prueba 3', nota: '6.3' },
      ]
    },
    {
      nombreAsignatura: 'Artes Visuales',
      colorAsignatura: '#3a7be0',
      notas: [
        { nombrePrueba: 'Prueba 1', nota: '6.2' },
        { nombrePrueba: 'Prueba 2', nota: '5.5' },
        { nombrePrueba: 'Prueba 3', nota: '6.3' },
      ]
    },
  ]

  constructor() { }

}

interface IAsignatura {
  nombreAsignatura: string;
  colorAsignatura: string;
  notas: INota[];
}

interface INota {
  nombrePrueba: string;
  nota: string;
}