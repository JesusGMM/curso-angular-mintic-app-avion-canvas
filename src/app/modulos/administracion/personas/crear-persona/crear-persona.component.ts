import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicio/persona.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css'],
})
export class CrearPersonaComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    correo: ['', [Validators.required, Validators.email]],
    rol: ['', [Validators.required]],
    ciudad: ['', [Validators.required]],
    departamento: ['', [Validators.required]],
    dirreccion: ['', [Validators.required]],
    estado: ['', [Validators.required]],
    carta: [''],
  });
  constructor(
    private fb: FormBuilder,
    private usuarioservicio: PersonaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  guardarUsuario() {
    let p = new ModeloPersona();
    p.nombre = this.fgValidador.controls['nombre'].value;
    p.apellido = this.fgValidador.controls['apellido'].value;
    p.correo = this.fgValidador.controls['correo'].value;
    p.rol = this.fgValidador.controls['rol'].value;
    p.estado = this.fgValidador.controls['estado'].value;
    p.ciudad = this.fgValidador.controls['ciudad'].value;
    p.departamento = this.fgValidador.controls['departamento'].value;
    p.dirreccion = this.fgValidador.controls['dirreccion'].value;
    if (this.fgValidador.controls['carta'].value != null)
      p.carta_laboral = this.fgValidador.controls['carta'].value;
    this.usuarioservicio.crearUsuario(p).subscribe(
      (datos: ModeloPersona) => {
        Swal.fire({
          title: 'Usuario Registrado',
          text: 'Datos guardados',
          icon: 'success',
        })
        this.router.navigate(['/administracion/buscar-persona']);
      },
      (error: any) => {
        Swal.fire({
          title: 'Error',
          text: 'Error al crear un usuario',
          icon: 'error',
        })
      }
    );
  }
}
