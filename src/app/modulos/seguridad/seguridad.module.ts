import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdenticacionComponent } from './identicacion/identicacion.component';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';


@NgModule({
  declarations: [
    IdenticacionComponent,
    CambiarClaveComponent,
    RecuperarClaveComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
