import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'option'
})
export class OptionPipe implements PipeTransform {


  transform(value: unknown, ...args: unknown[]): any {
    return value;
  }

}
