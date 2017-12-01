import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  @HostListener('mouseenter') mouseEntro() {
    this.el.nativeElement.style.backgroundColor = "yellow";
  }
  
  @HostListener('mouseleave') mouseSalio() {
    this.el.nativeElement.style.backgroundColor = null;
  }

  constructor(private el:ElementRef) { }

}
