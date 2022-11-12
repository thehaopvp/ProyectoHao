import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './comics/comics.component';
import { LoginGuard } from '../guards/login.guard';
import { SubirComicsComponent } from './subir-comics/subir-comics.component';



const routes: Routes = [
  {
    path: '',
   canActivate: [LoginGuard],
    component: ComicsComponent,
  },
  {
    path: 'subir',
   canActivate: [LoginGuard],
    component: SubirComicsComponent,
  },

  { path: '',canActivate: [LoginGuard], component: ComicsComponent },
  { path: '**', canActivate: [LoginGuard], component: ComicsComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicRoutingModule { }
