import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown 
  {
    var temp : string = "";

    for(var i = value.length-1; i >= 0; i--)
    {
        temp+= value[i];
    }
    return temp;
  }

}
