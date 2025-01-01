import { Component } from '@angular/core';
import { CompFailureDirective } from './comp-failure.directive';
import { CompSuccessDirective } from './comp-success.directive';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CompFailureDirective,CompSuccessDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular14_1';
}
