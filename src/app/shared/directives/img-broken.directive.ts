import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void{
    const elNative = this.elHost.nativeElement
    elNative.src = 'https://ionicframework.com/docs/img/demos/avatar.svg'
  }

  constructor(private elHost: ElementRef) {
    
   }

}