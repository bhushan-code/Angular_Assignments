import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  public str : string = 'Bhushan is Good Programmer';
  public Count : number = 0;
  public No : number = 17;
  public bFlag : boolean = false;

  constructor(private nobj : NumberService, private sobj : StringService)
  {
    this.Count = sobj.CountCapital(this.str);
    this.bFlag = nobj.ChkPrime(this.No);
  }
}
