import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public usuario: string;
  public contrasena: string;
  public formularioLogin: FormGroup;
  public formularioErroneo: boolean = false;
  public mensajeError: string = '';

  private usuariosRegistrados: IUsuariosRegistrados[] = [
    {
      usuario: 'apoderado01',
      contrasena: '12345',
      esProfesor: false,
    },
    {
      usuario: 'profesor01',
      contrasena: '12345',
      esProfesor: true,
    },
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formularioLogin = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(7)]],
      contrasena: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  iniciarSesion() {
    if (this.formularioLogin.valid) {
      const usuarioIngresado = this.formularioLogin.get('usuario').value;
      const contrasenaIngresada = this.formularioLogin.get('contrasena').value;

      const usuario = this.usuariosRegistrados.filter((usuario) => {
        return usuario.usuario === this.formularioLogin.get('usuario').value;
      });
      if (
        usuario.length === 1 &&
        usuario[0].usuario === usuarioIngresado &&
        usuario[0].contrasena === contrasenaIngresada
      ) {
        if (usuario[0].esProfesor) return this.router.navigate(['profesor/inicio']);
        return this.router.navigate(['apoderado/inicio']);
      } else {
        this.formularioErroneo = true;
        this.mensajeError = 'Usuario incorrecto.';
      }
    } else {
      this.formularioErroneo = true;
      this.mensajeError = 'Ingrese datos correctos.';
    }
  }

  cambioInput() {
    const usuarioIngresado = this.formularioLogin.get('usuario').value;
    const contrasenaIngresada = this.formularioLogin.get('contrasena').value;
    if (usuarioIngresado === '' || contrasenaIngresada === '') {
      this.formularioErroneo = false;
    }
  }
}

interface IUsuariosRegistrados {
  usuario: string;
  contrasena: string;
  esProfesor: boolean;
}
