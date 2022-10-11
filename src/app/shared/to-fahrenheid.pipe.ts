import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFahrenheid'
})
export class ToFahrenheidPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
