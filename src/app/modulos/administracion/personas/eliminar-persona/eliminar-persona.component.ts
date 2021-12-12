import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicio/persona.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-eliminar-persona',
  templateUrl: './eliminar-persona.component.html',
  styleUrls: ['./eliminar-persona.component.css']
})
export class EliminarPersonaComponent implements OnInit {
  id: string = '';
  listadoUsuario: ModeloPersona = new ModeloPersona;
  constructor(
    private usuarioservicio: PersonaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.obtenerUsuario();
  }

  obtenerUsuario(){
    this.usuarioservicio
      .buscarUsuarioId(this.id)
      .subscribe((datos: ModeloPersona) => {
        this.listadoUsuario = datos;
      });
  }

  eliminarUsuario() {
    this.usuarioservicio.eliminarUsuario(this.id).subscribe(
      (datos: ModeloPersona) => {
        Swal.fire({
          title: 'Usuario Eliminado',
          text: 'Cambios registrados',
          icon: 'success',
        })
        this.router.navigate(['/administracion/buscar-persona']);
      },
      (error: any) => {
        Swal.fire({
          title: 'Error',
          text: 'Error al eliminar un usuario',
          icon: 'error',
        })
      }
    );
  }
}
