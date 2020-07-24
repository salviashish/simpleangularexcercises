import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  template:''
})
export class BaseComponent implements OnInit {

    constructor(private form:FormGroup){}

    getRef(): ViewContainerRef{
      return;
    }

    IsDirtry()
    {
      return this.form.valid;
    }

    ngOnInit(){}
}