import { ValidatorFn, ValidationErrors, AsyncValidatorFn, AbstractControl } from "@angular/forms";

//class Validator {
//    static min(min: number): ValidatorFn
//    static max(max: number): ValidatorFn
//    static required(control: AbstractControl): ValidationErrors | null
//    static requiredTrue(control: AbstractControl): ValidationErrors | null
//    static email(control: AbstractControl): ValidationErrors | null
//    static minLength(minLength: number): ValidatorFn
//    static maxLength(maxLength: number): ValidatorFn
//    static pattern(pattern: string | RegExp): ValidatorFn
//    static nullValidator(c: AbstractControl): ValidationErrors | null
//    static compose(validators: (ValidatorFn | null | undefined)[] | null): ValidatorFn | null
//    static composeAsync(validators: (AsyncValidatorFn | null)[]): AsyncValidatorFn | null
//}