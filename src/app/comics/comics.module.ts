import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ValidatorModule } from "../validator/validator.module";
import { ComicRoutingModule } from "./comic-routing.module";
import { ComicsComponent } from "./comics/comics.component";
import { SubirComicsComponent } from "./subir-comics/subir-comics.component";
import { ComicItemComponent } from './comic-item/comic-item.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';
import { ComicPipe } from "./comicpipes/comic.pipe";
import { CapituloItemComponent } from './capitulo-item/capitulo-item.component';
import { CapituloDetailsComponent } from './capitulo-details/capitulo-details.component';
import { CargarPaginaComponent } from './cargar-pagina/cargar-pagina.component';






@NgModule({
  declarations: [
    ComicsComponent,
    SubirComicsComponent,
    ComicItemComponent,
    ComicDetailsComponent,
    ComicPipe,
    CapituloItemComponent,
    CapituloDetailsComponent,
    CargarPaginaComponent
  ],
  imports: [
    CommonModule,
    ComicRoutingModule ,
    FormsModule,
    ValidatorModule
  ]
})
export class ComicsModule { }
