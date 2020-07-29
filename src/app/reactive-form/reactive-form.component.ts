import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import * as customValidators from '../directives/validator.functions';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent extends BaseComponent implements OnInit {
  myForm : FormGroup;
  post : any;
  states:string[]=['Georgia','Minneapolis','Colorado','California','NewYork']

  constructor(private formBuilder:FormBuilder,viewContainer:ViewContainerRef) {
    super(viewContainer);
    this.myForm = formBuilder.group({
      name:[null,Validators.required],
      gender:[null,Validators.required],
      address:[null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(100)])],
      zipcode:[null,Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10),customValidators.zipCodeValidator('55423-1234')])],
      city:[null,Validators.required],
      state:[null,Validators.required],
      email:[null,Validators.compose([Validators.required,customValidators.emailValidator('anonymous@gmail.com')])],
      phone:[null,Validators.compose([Validators.required,Validators.maxLength(10)])],
      tc:[null,Validators.required]
    });
   }

  ngOnInit() {
    super.formInstance = this.myForm;
  }

  // as the BaseComponent method IsDirty is overridden, guard will call this function.
  // if this method is not implemented, IsDirty function of BaseComponent will be invoked. 
  // IsDirty():boolean{
  //   console.log('Invoked child component function');
  //   console.log(`touched: ${this.myForm.touched}`);
  //   console.log(`dirty: ${this.myForm.dirty}`);
  //   return (this.myForm.touched || this.myForm.dirty);
  // }

  validate(){
    console.log(this.myForm.valid)
    console.log(this.myForm.value)
  }
}