import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { BuscarAvionComponent } from './aviones/buscar-avion/buscar-avion.component';
import { EliminarAvionComponent } from './aviones/eliminar-avion/eliminar-avion.component';
import { EditarAvionComponent } from './aviones/editar-avion/editar-avion.component';
import { CrearAvionComponent } from './aviones/crear-avion/crear-avion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearPersonaComponent,
    EditarPersonaComponent,
    EliminarPersonaComponent,
    BuscarPersonaComponent,
    BuscarAvionComponent,
    EliminarAvionComponent,
    EditarAvionComponent,
    CrearAvionComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
