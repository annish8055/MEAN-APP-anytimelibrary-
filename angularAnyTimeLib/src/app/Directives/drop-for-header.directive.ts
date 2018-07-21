import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropForHeader]'
})
export class DropForHeaderDirective {
  @HostBinding('class.collapse') iscollapsed;
  @HostListener('click') toggleCollapse(){
    console.log("we are in header directive",this.iscollapsed);
    this.iscollapsed= !this.iscollapsed;
  }

}
