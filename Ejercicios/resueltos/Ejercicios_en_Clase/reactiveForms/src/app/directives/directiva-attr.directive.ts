import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectivaAttr]'
})
export class DirectivaAttrDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.backgroundColor='blue';
  }

}
