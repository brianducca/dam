import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFontDevice]'
})
export class FontDeviceDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "blue";
    
   }

}
