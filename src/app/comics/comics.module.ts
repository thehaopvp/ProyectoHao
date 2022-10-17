import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComicsComponent } from './comics/comics.component';
import { ComicRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    ComicsComponent
  ],
  imports: [
    CommonModule,
    ComicRoutingModule

  ]
})
export class ComicsModule { }
