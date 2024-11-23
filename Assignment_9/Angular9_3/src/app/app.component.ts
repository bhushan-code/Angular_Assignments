import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarvellousChkPipe } from './marvellous-chk.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MarvellousChkPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  public No : number = 11;
}
