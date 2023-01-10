import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPasswordvalidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordvalidatorDirective, multi: true}]
})
export class PasswordvalidatorDirective {

  @Input() appPasswordvalidator!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.appPasswordvalidator !== '' && this.appPasswordvalidator !== control.value) {
      return { appPasswordvalidator:true};
    }
    return null;
  }

}


