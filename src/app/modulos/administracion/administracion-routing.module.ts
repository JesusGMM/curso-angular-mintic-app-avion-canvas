import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadroSesionGuard } from 'src/app/guardianes/validadro-sesion.guard';
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
    canActivate:[ValidadroSesionGuard]
  },
  {
    path: 'editar-persona/:id',
    component: EditarPersonaComponent,
    canActivate:[ValidadroSesionGuard]
  }, 
  {
    path: 'buscar-persona',
    component: BuscarPersonaComponent,
    canActivate:[ValidadroSesionGuard]
  },
  {
    path: 'eliminar-persona/:id',
    component: EliminarPersonaComponent,
    canActivate:[ValidadroSesionGuard]
  },
  {
    path: 'crear-avion',
    component: CrearAvionComponent,
    canActivate:[ValidadroSesionGuard]
  },
  {
    path: 'editar-avion/:id',
    component: EditarAvionComponent,
    canActivate:[ValidadroSesionGuard]
  }, 
  {
    path: 'buscar-avion',
    component: BuscarAvionComponent,
    canActivate:[ValidadroSesionGuard]
  },
  {
    path: 'eliminar-avion/:id',
    component: EliminarAvionComponent,
    canActivate:[ValidadroSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministracionRoutingModule {}
