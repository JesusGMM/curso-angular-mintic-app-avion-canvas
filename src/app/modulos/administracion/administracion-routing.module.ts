import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAvionComponent } from './aviones/buscar-avion/buscar-avion.component';
import { CrearAvionComponent } from './aviones/crear-avion/crear-avion.component';
import { EditarAvionComponent } from './aviones/editar-avion/editar-avion.component';
import { EliminarAvionComponent } from './aviones/eliminar-avion/eliminar-avion.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';

const routes: Routes = [
  {
    path: 'crear-persona',
    component: CrearPersonaComponent,
  },
  {
    path: 'editar-persona',
    component: EditarPersonaComponent,
  }, 
  {
    path: 'buscar-persona',
    component: BuscarPersonaComponent,
  },
  {
    path: 'elimar-persona',
    component: EliminarPersonaComponent,
  },
  {
    path: 'crear-avion',
    component: CrearAvionComponent,
  },
  {
    path: 'editar-avion',
    component: EditarAvionComponent,
  }, 
  {
    path: 'buscar-avion',
    component: BuscarAvionComponent,
  },
  {
    path: 'elimar-avion',
    component: EliminarAvionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministracionRoutingModule {}
