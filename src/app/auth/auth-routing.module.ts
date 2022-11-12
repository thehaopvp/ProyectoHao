import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';
import { ProfileResolverResolver } from '../users/resolver/profile-resolver.resolver';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';


const routes: Routes = [
  {
    path: 'login',

    component: AuthLoginComponent,
  },
  {
    path: 'register',

    component: AuthRegisterComponent,

  },
  {
    path: 'edit',
    canActivate: [LoginGuard],
    component: EditarPerfilComponent,
    resolve: {
      profile: ProfileResolverResolver,
    },

  },
  { path: '',  component: AuthLoginComponent },
  { path: '**',  component: AuthLoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
