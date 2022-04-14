import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kpapipe'
})
export class KpapipePipe implements PipeTransform {

  transform(value: Number): String {
    return `${value}kPA`;
  }

}
