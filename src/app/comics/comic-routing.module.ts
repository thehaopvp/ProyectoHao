import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './comics/comics.component';
import { LoginGuard } from '../guards/login.guard';
import { SubirComicsComponent } from './subir-comics/subir-comics.component';
import { ComicResolver } from './resolver/comic.resolver';
import { ComicDetailsComponent } from './comic-details/comic-details.component';
import { CapituloDetailsComponent } from './capitulo-details/capitulo-details.component';
import { CapitulosResolver } from './resolver/capitulos.resolver';
import { CargarPaginaComponent } from './cargar-pagina/cargar-pagina.component';
import { ComentariosResolver } from './resolver/comentarios.resolver';



const routes: Routes = [
  {
    path: '',
   canActivate: [LoginGuard],
    component: ComicsComponent,
  },
  {
    path: 'cargarPagina',
   canActivate: [LoginGuard],
    component: CargarPaginaComponent,
  },
  {
    path: 'subir',
   canActivate: [LoginGuard],
    component: SubirComicsComponent,
  },
  {
    path: ':id',
    canActivate: [LoginGuard],
    component: ComicDetailsComponent,
    resolve: {
      comic: ComicResolver,
      comentarios : ComentariosResolver
    },
  },
  {
    path: 'capitulo/:id',
   canActivate: [LoginGuard],
    component: CapituloDetailsComponent,
    resolve: {
      capitulo: CapitulosResolver,
    },
  },


  { path: '',canActivate: [LoginGuard], component: ComicsComponent },
  { path: '**', canActivate: [LoginGuard], component: ComicsComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicRoutingModule { }
