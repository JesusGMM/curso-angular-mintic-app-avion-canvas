import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloAvion } from 'src/app/modelos/avion.modelo';
import { AvionService } from 'src/app/servicio/avion.service';

@Component({
  selector: 'app-eliminar-avion',
  templateUrl: './eliminar-avion.component.html',
  styleUrls: ['./eliminar-avion.component.css'],
})
export class EliminarAvionComponent implements OnInit {
  id: string = '';
  listadoAviones: ModeloAvion = new ModeloAvion();
  constructor(
    private avionservicio: AvionService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.obtenerAvion();
  }

  obtenerAvion(){
    this.avionservicio
      .buscarAvionId(this.id)
      .subscribe((datos: ModeloAvion) => {
        this.listadoAviones = datos;
      });
  }

  eliminarAvion() {
    this.avionservicio.eliminarAvion(this.id).subscribe(
      (datos: ModeloAvion) => {
        alert('Avion eliminado');
        this.router.navigate(['/administracion/buscar-avion']);
      },
      (error: any) => {
        alert('error');
      }
    );
  }
}
