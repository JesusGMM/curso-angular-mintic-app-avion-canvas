import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root',
})
export class SeguridadService {
  url = 'http://[::1]:3000';
  datosUsuarioSesion = new BehaviorSubject<ModeloIdentificar>(
    new ModeloIdentificar()
  );
  constructor(private http: HttpClient) {
    this.verificarSesionActual();
  }

  identificar(correo: string, pasword: string): Observable<ModeloIdentificar> {
    return this.http.post<ModeloIdentificar>(
      `${this.url}/identificarPersona`,
      { usuario: correo, clave: pasword },
      {
        headers: new HttpHeaders({}),
      }
    );
  }

  almacenarSesion(datos: ModeloIdentificar) {
    datos.estadoIdentificado = true;
    let stringdatos = JSON.stringify(datos);
    localStorage.setItem('datosSesion', stringdatos);
    this.refrescarDatosSesion(datos);
  }

  obtenerInformacionSesion() {
    let datos = localStorage.getItem('datosSesion');
    if (datos) {
      let dato = JSON.parse(datos);
      return dato;
    } else {
      return null;
    }
  }

  eliminarInformacionSesion() {
    localStorage.removeItem('datosSesion');
    this.refrescarDatosSesion(new ModeloIdentificar());
  }

  sesionIniciada() {
    let datos = localStorage.getItem('datosSesion');
    return datos;
  }

  verificarSesionActual() {
    let datos = this.obtenerInformacionSesion();
    if (datos)
      this.refrescarDatosSesion(datos);
  }

  obtenerDatosUsuarioSesion(){
    return this.datosUsuarioSesion.asObservable();
  }

  refrescarDatosSesion(datos: ModeloIdentificar){
    return this.datosUsuarioSesion.next(datos);
  }
}
