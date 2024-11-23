import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMulti',
  standalone: true
})
export class MyMultiPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number 
  {
    return value * args[0];
  }
}
