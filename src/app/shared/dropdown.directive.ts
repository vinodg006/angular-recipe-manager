import { Directive, HostBinding, HostListener } from '@angular/core';
@Directive({
  selector: '[appDropDown]',
})
export class DropDownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen(event: Event) {
    this.isOpen = !this.isOpen;
  }
}
