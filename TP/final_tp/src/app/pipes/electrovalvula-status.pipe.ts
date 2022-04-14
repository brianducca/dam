import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'electrovalvulaStatus'
})
export class ElectrovalvulaStatusPipe implements PipeTransform {

  transform(value: boolean): String {
    console.log('value'+value);
    return (value)?'Abierta':'Cerrada';
  }

}
