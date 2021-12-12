import { Pipe, PipeTransform } from '@angular/core';
import { ModeloAvion } from '../modelos/avion.modelo';

@Pipe({
  name: 'filtrosAviones',
})
export class FiltrosAvionesPipe implements PipeTransform {
  transform(aviones: ModeloAvion[], buscar: string): ModeloAvion[] {
   
    if (buscar.length === 0) return aviones;
    
    const resultados = aviones.filter((avion) =>
      avion.nombre!.toLowerCase().includes(buscar.toLowerCase()) || 
      avion.marca!.toLowerCase().includes(buscar.toLowerCase())
    );

    //OTRA FORMA
    // const resultado =[];
    // for (const avion of aviones) {
    //   if (avion.nombre!.toLowerCase().indexOf(buscar.toLowerCase()) > -1)
    //     resultado.push(avion);
    // }

    return resultados;
  }
}
