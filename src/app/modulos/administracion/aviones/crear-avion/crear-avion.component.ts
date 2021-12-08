import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloAvion } from 'src/app/modelos/avion.modelo';
import { AvionService } from 'src/app/servicio/avion.service';

@Component({
  selector: 'app-crear-avion',
  templateUrl: './crear-avion.component.html',
  styleUrls: ['./crear-avion.component.css'],
})
export class CrearAvionComponent implements OnInit {
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
  constructor(
    private fb: FormBuilder,
    private avionservicio: AvionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  guardarAvion() {
    let tipo = this.fgValidador.controls['tipo'].value;
    let estado = this.fgValidador.controls['estado'].value;
    let precio = parseInt(this.fgValidador.controls['precio'].value);
    let imagen = this.fgValidador.controls['imagen'].value;
    let p = new ModeloAvion();
    p.nombre = this.fgValidador.controls['nombre'].value;
    p.marca = this.fgValidador.controls['marca'].value;
    p.placa = this.fgValidador.controls['placa'].value;
    p.modelo = this.fgValidador.controls['modelo'].value;
    p.tipo = tipo;
    p.estado = estado;
    p.precio = precio;
    p.imagen = imagen;
    this.avionservicio.crearAvion(p).subscribe(
      (datos: ModeloAvion) => {
        alert('avion registrado');
        this.router.navigate(['/administracion/buscar-avion']);
      },
      (error: any) => {
        alert('error');
      }
    );
  }
}
