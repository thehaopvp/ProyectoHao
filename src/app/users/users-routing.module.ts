import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';
import { PerfilComponent } from './perfil/perfil/perfil.component';
import { ProfileResolverResolver } from './resolver/profile-resolver.resolver';
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';

const routes: Routes = [
  {
    path: 'me',
    canActivate: [LoginGuard],
    component: PerfilComponent,
    resolve: {
      profile: ProfileResolverResolver,
    },

  },
  {
    path: ':id',
    canActivate: [LoginGuard],
    component: PerfilComponent,
    resolve: {
      profile: ProfileResolverResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
