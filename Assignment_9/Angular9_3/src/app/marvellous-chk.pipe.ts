import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform 
{

  transform(value: number, ...args: string[]): unknown 
  {
    if(args[0] == "Prime")
    {
      var i = 0;
      for(i = 2; i<=value/2; i++)
      {
        if(value%i == 0)
        {
          break;
        }
      }
      if(i == (value/2+1))
      {
        return "It is not Prime number";
      }
      else
      {
        return "It is Prime number";
      }
    }

    
    if(args[0] == "Perfect")
    {
      var i = 0;
      var chk = 1;
      for(i = 2; i<=value/2; i++)
      {
        if(value%i == 0)
        {
          chk = chk + i;
        }
      }
      if(i == chk)
      {
        return "It is Perfect number";
      }
      else
      {
        return "It is not Perfect number";
      }
    }


    if(args[0] == "Even")
    {
      if(value % 2 != 0)
        {
          return "It is not Even";
        }
      else
        {
          return "It is Even";
        }
    }


    if(args[0] == "Odd")
    {
      if(value % 2 != 0)
        {
          return "It is Odd";
        }
      else
        {
          return "It is not Even";
        }
    }

    return;
  }

}
