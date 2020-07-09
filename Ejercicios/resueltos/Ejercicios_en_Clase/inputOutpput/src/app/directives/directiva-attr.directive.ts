import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectivaAttr]'
})
export class DirectivaAttrDirective {

  constructor(private el:ElementRef) { 
   
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.cambiar('yellow');
  }

  
  @HostListener('mouseleave') onMouseLeave(){
    this.cambiar(null);
  }

  private cambiar(color){
    this.el.nativeElement.style.backgroundColor=color;
  }


}
