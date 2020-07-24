import { Directive, Input } from '@angular/core';
import { ValidationErrors, FormControl, Validator, NG_VALIDATORS } from '@angular/forms';

import { emailValidator, phoneValidator, zipCodeValidator  } from './validator.functions';

@Directive({
  selector:'[validateEmail][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements Validator{
  @Input() validateEmail;

  validate(c: FormControl){
    return emailValidator(this.validateEmail)(c);
  }
}

@Directive({
  selector:'[validatePhone]',
  providers: [{provide: NG_VALIDATORS, useExisting: PhoneNumberValidatorDirective, multi: true}]
})
export class PhoneNumberValidatorDirective implements Validator{
  @Input() validatePhone;

  validate(c: FormControl){
    return phoneValidator(this.validatePhone)(c);
  }
}

@Directive({
  selector:'[validateZipCode]',
  providers:[{provide: NG_VALIDATORS, useExisting: ZipCodeValidatorDirective, multi: true}]
})
export class ZipCodeValidatorDirective implements Validator{
  @Input() validateZipCode;

  validate(c: FormControl){
    return zipCodeValidator(this.validateZipCode)(c);
  }
}