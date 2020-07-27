import { Input,Self,Directive, ElementRef, HostBinding, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgControl,ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[field-error]'
})
export class ErrorDirective {

  validStatus = 'green';
  invalidStatus = 'red';
  borderWidth = '3px';
  borderStyle = 'solid';

  constructor(@Self() private element:NgControl) {
  }

  get showBorder(){
    return this.element.dirty || this.element.touched;
  }

  get isValid() : boolean {
    return this.element.status === 'VALID' ? true : false;
  }

  @HostBinding('style.border-width')
  get borderWidthCss(){
    return this.showBorder ? this.borderWidth : null;
  }

  @HostBinding('style.border-style')
  get borderStyleCss(){
    return this.showBorder ? this.borderStyle : null;
  }

  @HostBinding('style.border-color')
  get borderColorCss(){
    return this.isValid? this.validStatus : this.invalidStatus;
  }
}

@Directive({
  selector:'[showErrors]'
})
export class ShowErrorsDirective{
  constructor(private template:TemplateRef<any>,private viewContainer:ViewContainerRef){}

  @Input() set showErrors(errors: ValidationErrors){

    console.log(errors)
    if(errors!==null)
    {
      console.log(this.template);
      this.viewContainer.createEmbeddedView(this.template);
    }
    else{
      this.viewContainer.clear();
    }
  }
}