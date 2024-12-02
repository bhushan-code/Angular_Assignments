import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public ChkPrime(No : number)
  {
    var bFlag : boolean = false;
    var Cnt :  number = 0;

    for(Cnt = 2; Cnt <= No/2; Cnt++)
    {
      if(No % Cnt == 0)
      {
        bFlag = true;
        break;
      }

    }
    return bFlag;
  }
}
