import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BaseComponent } from '../base.component'
@Component({
  selector: 'app-standard-form',
  templateUrl: './standard-form.component.html',
  styleUrls: ['./standard-form.component.css']
})
export class StandardFormComponent extends BaseComponent implements OnInit {

  constructor(){ 
    super(null);
  }
  states:string[];

  ngOnInit() {
    this.states =['Minneapolis','Georgia','California','Colorado','Montana'];
  }

  showSelectedState(stateSelected:string)
  {
    console.log(`state dropdown changed and selected value is ${stateSelected}`);
  }

  validate(form:NgForm)
  {
    console.info(form.valid)
    console.log(form.value);
  }

}