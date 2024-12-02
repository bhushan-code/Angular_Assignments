import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService 
{
  constructor() { }

  public CountCapital(str : string)
  {
    var Count : number = 0;
    var Cnt : number = 0;
    for(Cnt = 0; Cnt <= str.length; Cnt++)
    {
      if(str[Cnt] >= 'A' && str[Cnt] <= 'Z')
      {
        Count++;
      }
    }
    return Count
  }
}
