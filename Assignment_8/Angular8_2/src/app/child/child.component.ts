import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  @Input() public ParentData : any;
  
  @Output() public Myevent = new EventEmitter();

  public Data = "Hi from Child";

  public SendMessage()
  {
    this.Myevent.emit(this.Data);
  }
}
