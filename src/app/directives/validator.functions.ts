import { ValidatorFn,ValidationErrors,AbstractControl } from '@angular/forms';

function emailValidator(email:string): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if(EMAIL_REGEXP.test(control.value))
      return null;
    else{
      return {
        invalidEmail:{
          allowedEmail: email
        }
      };
    } 
  }
};

function phoneValidator(phoneFormat:string) : ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null =>{
    const PHONENUMBER_REGEXP = /^([\+][0-9]{1,3}([ \.\-])?)?([\(]{1}[0-9]{3}[\)])?([0-9A-Z \.\-]{1,32})((x|ext|extension)?[0-9]{1,4}?)$/;

    if(PHONENUMBER_REGEXP.test(control.value))
      return null;
    {
      return{
        invalidPhone:{
          errorMessage:'Phone format is invalid',
          allowedFormat:phoneFormat
        }
      }
    }
  };
};

function zipCodeValidator(zipCodeFormat:string) : ValidatorFn{
  return(control: AbstractControl) : ValidationErrors | null =>{
    const ZIPCODE_REGEXP = /^((\d{5}-\d{4})|(\d{5})|([A-Z]\d[A-Z]\s\d[A-Z]\d))$/;

    if(ZIPCODE_REGEXP.test(control.value))
      return null;
    else
    {
      return{
        invalidZipCode:{
          errorMessage:"ZIP Code format is invalid",
          allowedFormat:zipCodeFormat
        }
      }
    }
  }
}

export {emailValidator, phoneValidator, zipCodeValidator}