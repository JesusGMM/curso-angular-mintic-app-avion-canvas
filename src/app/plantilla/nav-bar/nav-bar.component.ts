import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicio/seguridad.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  sesion: boolean = false;
  subs: Subscription = new Subscription();

  constructor(private seguridaServicio: SeguridadService) {}

  ngOnInit(): void {
    this.subs = this.seguridaServicio
      .obtenerDatosUsuarioSesion()
      .subscribe((datos: ModeloIdentificar) => {
       this.sesion = datos.estadoIdentificado;
      });
  }
}
