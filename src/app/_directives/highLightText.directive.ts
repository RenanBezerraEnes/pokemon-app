import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLightText]',
})
export class HighLightTextDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    // This is not the best approach, use Renderer2 is the correct way
    // Of course this is a just a simple example about custom directive
    this.el.nativeElement.style.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'purple';
  }
}
