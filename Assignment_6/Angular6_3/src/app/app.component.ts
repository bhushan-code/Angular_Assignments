import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1 [class] = "'addcolor'">Marvellous Infosystem</h1>
    <input text = "text">
    `,
  styles: `
    .addcolor
      {
          color: blue;
      }`
  })

export class AppComponent 
{
}
