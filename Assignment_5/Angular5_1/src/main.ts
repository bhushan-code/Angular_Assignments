import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
import { FirstCompComponent } from './app/first-comp/first-comp.component';

bootstrapApplication(FirstCompComponent)
  .catch((err) => console.error(err));
