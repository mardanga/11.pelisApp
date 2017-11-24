import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenPortada'
})
export class ImagenPortadaPipe implements PipeTransform {

  transform(pelicula: any): string {
    let urlImg = 'http://image.tmdb.org/t/p/w500';
    if (pelicula.backdrop_path) {
      return urlImg + pelicula.backdrop_path
    } else if (pelicula.poster_path) {
      return urlImg + pelicula.poster_path;
    } else {
      return 'assets/noimage.png';
    }
  }
}
