import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as crypto from 'crypto-js';
import { SeguridadService } from 'src/app/servicio/seguridad.service';

@Component({
  selector: 'app-identicacion',
  templateUrl: './identicacion.component.html',
  styleUrls: ['./identicacion.component.css'],
})
export class IdenticacionComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    usuario: ['', [Validators.required, Validators.email]],
    clave: ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private servicioseguridad: SeguridadService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //this.fgValidador.controls["usuario"].setValue("probando");
  }

  identificarUsuario() {
    let usuario = this.fgValidador.controls['usuario'].value;
    let clave = this.fgValidador.controls['clave'].value;
    // alert(usuario + clave);
    let clavecifrada = crypto.MD5(clave).toString();

    this.servicioseguridad.identificar(usuario, clave).subscribe(
      (datos: any) => {
        this.servicioseguridad.almacenarSesion(datos);
        this.router.navigate(["/inicio"]);
      },
      (error: any) => {
        alert('no registrada');
      }
    );
  }
}
