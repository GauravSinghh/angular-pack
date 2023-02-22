import { Directive, HostBinding, HostListener, ElementRef} from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{

   // @HostBinding('class.open') isOpen=false;

    // @HostListener('click') toggleOpen(){        //dropdown on click
    //     this.isOpen=!this.isOpen;
    // };



    //closing dropdown anywhere by clicking anywhere on the screen
    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
      this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) {}
  

}