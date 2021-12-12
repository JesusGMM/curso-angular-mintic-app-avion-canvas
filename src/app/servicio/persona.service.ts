import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPersona } from '../modelos/persona.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  url = 'http://[::1]:3000';
  token: String = '';
  constructor(
    private http: HttpClient,
    private seguridadservicio: SeguridadService
  ) {
    let dato = this.seguridadservicio.obtenerToken();
    this.token = dato.tk;
  }

  obtenerRegistros(): Observable<ModeloPersona[]> {
    return this.http.get<ModeloPersona[]>(`${this.url}/personas`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }

  crearUsuario(usuario: ModeloPersona): Observable<ModeloPersona> {
    return this.http.post<ModeloPersona>(`${this.url}/personas`, usuario, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }

  actulizarUsuario(usuario: ModeloPersona): Observable<ModeloPersona> {
    return this.http.put<ModeloPersona>(
      `${this.url}/personas/${usuario.id}`,
      usuario,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }

  eliminarUsuario(id: String): Observable<any> {
    return this.http.delete(`${this.url}/personas/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }

  buscarUsuarioId(id: String): Observable<ModeloPersona> {
    return this.http.get<ModeloPersona>(`${this.url}/personas/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    });
  }
}
