import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicio/persona.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {
  fgValidador: FormGroup  = this.fb.group({
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
  id: string = '';
  constructor(
    private fb: FormBuilder,
    private usuarioservicio: PersonaService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.buscarUsuario();
  }

  buscarUsuario() {
    this.usuarioservicio
      .buscarUsuarioId(this.id)
      .subscribe((datos: ModeloPersona) => {
        this.fgValidador.controls['nombre'].setValue(datos.nombre);
        this.fgValidador.controls['apellido'].setValue(datos.apellido);
        this.fgValidador.controls['correo'].setValue(datos.correo);
        this.fgValidador.controls['rol'].setValue(datos.rol);
        this.fgValidador.controls['estado'].setValue(datos.estado);
        this.fgValidador.controls['ciudad'].setValue(datos.ciudad);
        this.fgValidador.controls['departamento'].setValue(datos.departamento);
        this.fgValidador.controls['dirreccion'].setValue(datos.dirreccion);
        this.fgValidador.controls['carta'].setValue(datos.carta_laboral);
      });
  }


  editarUsuario() {
    let p = new ModeloPersona();
    p.id = this.id;
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
    this.usuarioservicio.actulizarUsuario(p).subscribe(
      (datos: ModeloPersona) => {
        Swal.fire({
          title: 'Usuario Actualizado',
          text: 'Datos guardados',
          icon: 'success',
        })
        this.router.navigate(['/administracion/buscar-persona']);
      },
      (error: any) => {
        Swal.fire({
          title: 'Error',
          text: 'Error al actualizar un usuario',
          icon: 'error',
        })
      }
    );
  }
}
