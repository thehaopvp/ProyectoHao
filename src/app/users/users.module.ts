import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil/perfil.component';



@NgModule({
  declarations: [
    PerfilComponent,

  ],
  imports: [CommonModule, UsersRoutingModule, FormsModule],
})
export class UsersModule { }
