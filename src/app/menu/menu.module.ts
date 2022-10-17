import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { ValidatorModule } from '../validator/validator.module';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [MenuTopComponent],
  declarations: [
    MenuTopComponent,

  ],
  imports: [
    CommonModule,
    ValidatorModule,
    RouterModule,
  ]
})
export class MenuModule { }
