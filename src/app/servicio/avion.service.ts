import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloAvion } from '../modelos/avion.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root',
})
export class AvionService {
  url = 'http://[::1]:3000';
  token: String = '';
  idUsuario: String = '';
  constructor(
    private http: HttpClient,
    private seguridadservicio: SeguridadService
  ) {
    let dato = this.seguridadservicio.obtenerToken();
    this.token = dato.tk;
    this.idUsuario = dato.datos.id.toString();
  }

  obtenerRegistros(): Observable<ModeloAvion[]> {
    return this.http.get<ModeloAvion[]>(`${this.url}/aviones`);
  }

  crearAvion(avion: ModeloAvion): Observable<ModeloAvion> {
    avion.responsableId = this.idUsuario;
    return this.http.post<ModeloAvion>(`${this.url}/aviones`, avion, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }

  actulizarAvion(avion: ModeloAvion): Observable<ModeloAvion> {
    return this.http.put<ModeloAvion>(
      `${this.url}/aviones/${avion.id}`,
      avion,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  eliminarAvion(id: String): Observable<any> {
    return this.http.delete(`${this.url}/aviones/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }

  buscarAvionId(id: String): Observable<ModeloAvion> {
    return this.http.get<ModeloAvion>(`${this.url}/aviones/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }
}
