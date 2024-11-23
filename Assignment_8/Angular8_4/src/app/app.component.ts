import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  public Data : any;

  InputData(event: Event): void 
  {
    const inputElement = event.target as HTMLInputElement;
    this.Data = inputElement.value;
  }
}
