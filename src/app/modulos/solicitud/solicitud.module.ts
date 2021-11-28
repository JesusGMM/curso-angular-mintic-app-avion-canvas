import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudRoutingModule } from './solicitud-routing.module';
import { SolicitarAvionComponent } from './solicitar-avion/solicitar-avion.component';


@NgModule({
  declarations: [
    SolicitarAvionComponent
  ],
  imports: [
    CommonModule,
    SolicitudRoutingModule
  ]
})
export class SolicitudModule { }
