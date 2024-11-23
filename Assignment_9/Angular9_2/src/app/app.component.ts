import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyAddPipe } from './my-add.pipe';
import { MyMultiPipe } from './my-multi.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyAddPipe,MyMultiPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'Angular9_2';
}
