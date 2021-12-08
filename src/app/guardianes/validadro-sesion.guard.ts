import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../servicio/seguridad.service';

@Injectable({
  providedIn: 'root',
})
export class ValidadroSesionGuard implements CanActivate {
  constructor(
    private servicioseguridad: SeguridadService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.servicioseguridad.obtenerInformacionSesion()) {
      return true;
    } else {
      this.router.navigate(['/inicio']);
      return false;
    }
  }
}
