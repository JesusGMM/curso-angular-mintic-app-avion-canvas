import { Component, OnInit } from '@angular/core';
import { ModeloAvion } from 'src/app/modelos/avion.modelo';
import { AvionService } from 'src/app/servicio/avion.service';

@Component({
  selector: 'app-buscar-avion',
  templateUrl: './buscar-avion.component.html',
  styleUrls: ['./buscar-avion.component.css'],
})
export class BuscarAvionComponent implements OnInit {
  listadoAviones: ModeloAvion[] = [];
  constructor(private avionservicio: AvionService) {
    this.obtenerListaAviones();
  }

  ngOnInit(): void {}

  obtenerListaAviones() {
    this.avionservicio.obtenerRegistros().subscribe((datos: ModeloAvion[]) => {
      this.listadoAviones = datos;
    });
  }
}
