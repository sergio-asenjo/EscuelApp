import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'boton-modulo',
  templateUrl: './boton-modulo.component.html',
  styleUrls: ['./boton-modulo.component.scss'],
})
export class BotonModuloComponent implements OnInit {
  @Input() colorFondo: string = '#ffffff';
  @Input() nombreModulo: string = 'Default';
  @Input() iconoModulo: string = '';

  constructor() { }

  ngOnInit() {}

}
