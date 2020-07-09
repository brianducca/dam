import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombrePipe'
})
export class NombrePipePipe implements PipeTransform {

  transform(value: number, exponente?:number): number {
    return Math.pow(value,isNaN(exponente)? 1 : exponente);
  }

}
