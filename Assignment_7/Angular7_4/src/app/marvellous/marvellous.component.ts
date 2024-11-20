import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent 
{
  @Output() public Myevent = new EventEmitter();

  str1 : string = "MARVELLOUS INFOSYSTEMS"
  str2 : string = "marvellous infosystem"

  public SendMessage1()
  {
    this.Myevent.emit(this.str1);
  }
  public SendMessage2()
  {
    this.Myevent.emit(this.str2);
  }
 
}
