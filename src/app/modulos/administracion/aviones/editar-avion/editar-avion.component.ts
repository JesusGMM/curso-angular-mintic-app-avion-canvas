import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloAvion } from 'src/app/modelos/avion.modelo';
import { AvionService } from 'src/app/servicio/avion.service';

@Component({
  selector: 'app-editar-avion',
  templateUrl: './editar-avion.component.html',
  styleUrls: ['./editar-avion.component.css'],
})
export class EditarAvionComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    placa: ['', [Validators.required]],
    marca: ['', [Validators.required]],
    modelo: ['', [Validators.required]],
    tipo: ['', [Validators.required]],
    estado: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    imagen: ['', [Validators.required]],
  });
  id: string = '';
  constructor(
    private fb: FormBuilder,
    private avionservicio: AvionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.buscarAvion();
  }

  buscarAvion() {
    this.avionservicio
      .buscarAvionId(this.id)
      .subscribe((datos: ModeloAvion) => {
        this.fgValidador.controls['nombre'].setValue(datos.nombre);
        this.fgValidador.controls['marca'].setValue(datos.marca);
        this.fgValidador.controls['placa'].setValue(datos.placa);
        this.fgValidador.controls['modelo'].setValue(datos.modelo);
        this.fgValidador.controls['tipo'].setValue(datos.tipo);
        this.fgValidador.controls['estado'].setValue(datos.estado);
        this.fgValidador.controls['precio'].setValue(datos.precio);
        this.fgValidador.controls['imagen'].setValue(datos.imagen);
      });
  }

  editarAvion() {
    let p = new ModeloAvion();
    p.id = this.id;
    p.nombre = this.fgValidador.controls['nombre'].value;
    p.marca = this.fgValidador.controls['marca'].value;
    p.placa = this.fgValidador.controls['placa'].value;
    p.modelo = this.fgValidador.controls['modelo'].value;
    p.tipo = this.fgValidador.controls['tipo'].value;
    p.estado = this.fgValidador.controls['estado'].value;
    p.precio = parseInt(this.fgValidador.controls['precio'].value);
    p.imagen = this.fgValidador.controls['imagen'].value;
    this.avionservicio.actulizarAvion(p).subscribe(
      (datos: ModeloAvion) => {
        alert('avion Actualizado');
        this.router.navigate(['/administracion/buscar-avion']);
      },
      (error: any) => {
        alert('error');
      }
    );
  }
}
