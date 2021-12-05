import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdenticacionComponent } from './identicacion/identicacion.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';

const routes: Routes = [
  {
    path: 'identificar',
    component: IdenticacionComponent,
  },
  {
    path: 'cambiar-clave',
    component: CambiarClaveComponent,
  },
  {
    path: 'recuperar-clave',
    component: RecuperarClaveComponent,
  },
  {
    path: 'cerrarSesion',
    component: CerrarSesionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguridadRoutingModule {}
