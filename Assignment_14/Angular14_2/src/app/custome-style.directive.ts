import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomeStyle]',
  standalone: true
})
export class CustomeStyleDirective {

  constructor(private obj : ElementRef) 
  {
    this.obj.nativeElement.style.fontWeight = 'bold';
    this.obj.nativeElement.style.background = 'yellow';
  }
}
