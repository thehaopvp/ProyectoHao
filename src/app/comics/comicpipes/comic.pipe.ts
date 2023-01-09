import { Pipe, PipeTransform } from '@angular/core';
import { comics } from '../ComicInterface/comics-interface';

@Pipe({
  name: 'comicFilter'
})
export class ComicPipe implements PipeTransform {

  transform(comics: comics[], filterBy: string): comics[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filter
      ? comics.filter(
          (ev) =>
            ev.titulo.toLocaleLowerCase().includes(filter) ||
            ev.descripcion.toLocaleLowerCase().includes(filter)
        )
      : comics;
  }

}
