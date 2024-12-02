import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService 
{
  constructor(){}

  public Add(No1 : number,No2 : number) : number
  {
    return No1 + No2;
  }
  
  public Sub(No1 : number,No2 : number) : number
  {
    return No1 - No2;
  }
}

