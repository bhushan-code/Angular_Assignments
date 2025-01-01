import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]',
  standalone: true
})
export class CompSuccessDirective 
{

  constructor(private obj : ElementRef) { }

  @HostListener('mouseenter') onmouseenter()
  {
    this.obj.nativeElement.style.color = 'green';
  }
  @HostListener('mouseleave') onmouseleave()
  {
    this.obj.nativeElement.style.color = 'black';
  }

}
