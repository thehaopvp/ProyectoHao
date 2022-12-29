import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ValidatorModule } from "../validator/validator.module";
import { ComicRoutingModule } from "./comic-routing.module";
import { ComicsComponent } from "./comics/comics.component";
import { SubirComicsComponent } from "./subir-comics/subir-comics.component";
import { ComicItemComponent } from './comic-item/comic-item.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';





@NgModule({
  declarations: [
    ComicsComponent,
    SubirComicsComponent,
    ComicItemComponent,
    ComicDetailsComponent
  ],
  imports: [
    CommonModule,
    ComicRoutingModule ,
    FormsModule,
    ValidatorModule
  ]
})
export class ComicsModule { }
