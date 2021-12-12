import { Component, OnInit } from '@angular/core';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicio/persona.service';

@Component({
  selector: 'app-buscar-persona',
  templateUrl: './buscar-persona.component.html',
  styleUrls: ['./buscar-persona.component.css']
})
export class BuscarPersonaComponent implements OnInit {
  listadoUsuario: ModeloPersona[] = [];
  buscarUsuario: string = '';
  constructor(private usuarioservicio: PersonaService) {
    this.obtenerListaPersona();
   }

  ngOnInit(): void {
  }

  obtenerListaPersona() {
    this.usuarioservicio.obtenerRegistros().subscribe((datos: ModeloPersona[]) => {
      this.listadoUsuario = datos;
    });
  }
}
