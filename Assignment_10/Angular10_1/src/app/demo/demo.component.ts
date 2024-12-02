import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public Add : number = 0;
  public Sub : number = 0;
  public No1 : number = 50;
  public No2 : number = 20;

  constructor(private aobj :ArithmeticService)
  {
    this.Add = aobj.Add(this.No1, this.No2);
    this.Sub = aobj.Sub(this.No1, this.No2);
  }
}
