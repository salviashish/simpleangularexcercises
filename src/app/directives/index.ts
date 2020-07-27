import { EmailValidatorDirective, PhoneNumberValidatorDirective ,ZipCodeValidatorDirective } from './validator.directives';
import { ErrorDirective,ShowErrorsDirective } from './error.directive';

export const directives:any[] = [
  EmailValidatorDirective,
  PhoneNumberValidatorDirective,
  ZipCodeValidatorDirective,
  ErrorDirective,
  ShowErrorsDirective
];

export * from './validator.directives';
export * from './error.directive';