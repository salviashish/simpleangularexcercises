import { Component, VERSION } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  states:string[]=['Minneapolis','Georgia','California','Colorado','Montana'];

  showSelectedState(stateSelected:string)
  {
    console.log(`state dropdown changed and selected value is ${stateSelected}`);
  }

  validateMe(stateForm:NgForm)
  {
    console.log(stateForm);
  }
}
