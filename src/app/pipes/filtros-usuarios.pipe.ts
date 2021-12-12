import { Pipe, PipeTransform } from '@angular/core';
import { ModeloPersona } from '../modelos/persona.modelo';

@Pipe({
  name: 'filtrosUsuarios'
})
export class FiltrosUsuariosPipe implements PipeTransform {

  transform(personas: ModeloPersona[],buscar: string): ModeloPersona[] {
    if (buscar.length === 0) return personas;
    
    const resultados = personas.filter((usuario) =>
      usuario.nombre!.toLowerCase().includes(buscar.toLowerCase()) || 
      usuario.apellido!.toLowerCase().includes(buscar.toLowerCase())
    );
    return resultados;
  }

}
