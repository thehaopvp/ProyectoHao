import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordvalidatorDirective } from './passwordValidator/passwordvalidator.directive';



@NgModule({
  declarations: [
    PasswordvalidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [PasswordvalidatorDirective ],
})
export class ValidatorModule { }


