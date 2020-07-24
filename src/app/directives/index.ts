import { EmailValidatorDirective, PhoneNumberValidatorDirective ,ZipCodeValidatorDirective } from './validator.directives';

export const directives:any[] = [
  EmailValidatorDirective,
  PhoneNumberValidatorDirective,
  ZipCodeValidatorDirective
];

export * from './validator.directives';