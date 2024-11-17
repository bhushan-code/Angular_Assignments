import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstCompComponent } from './first-comp/first-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FirstCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular5_3';
}
