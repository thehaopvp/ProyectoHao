import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { FormsModule } from '@angular/forms';
import { ValidatorModule } from '../validator/validator.module';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';




@NgModule({
  declarations: [
    AuthLoginComponent,
    AuthRegisterComponent,
    EditarPerfilComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ValidatorModule

  ]
})
export class AuthModule { }
