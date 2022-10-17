import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';


const routes: Routes = [
  {
    path: 'login',

    component: AuthLoginComponent,
  },
  {
    path: 'register',

    component: AuthRegisterComponent,

  },
  { path: '',  component: AuthLoginComponent },
  { path: '**',  component: AuthLoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
