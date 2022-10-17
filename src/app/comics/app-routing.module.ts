import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './comics/comics.component';


const routes: Routes = [
  {
    path: 'pepe',

    component: ComicsComponent,
  },

  { path: '',  component: ComicsComponent },
  { path: '**',  component: ComicsComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ComicRoutingModule { }
