import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  template:''
})
export class BaseComponent implements OnInit {

    private _form:FormGroup;

    constructor(private viewContainer:ViewContainerRef){}

    set formInstance(form:FormGroup){
      this._form = form;
    }

    getRef(): ViewContainerRef{
      return this.viewContainer;
    }

    IsDirty()
    {
      console.log('Invoked base component function');
      console.log(`touched: ${this._form.touched}`);
      console.log(`dirty: ${this._form.dirty}`);      
      return (this._form.touched || this._form.dirty);
    }

    ngOnInit(){}
}