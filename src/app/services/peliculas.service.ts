import {Jsonp} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class PeliculasService {

  apiKey = '&api_key=d7c4d1d80489b7e61437938efe2fdd5c';
  urlMovieDb= 'https://api.themoviedb.org/3';

  constructor(private jsonp: Jsonp) { }

  getPopulares() {
    // tslint:disable-next-line:prefer-const
    let url = this.urlMovieDb + '/discover/movie?sort_by=popularity.desc' + this.apiKey + '&language=es&callback=JSONP_CALLBACK';
    return this.jsonp.get(url).map(res => res.json());
  }

  getEnCartelera() {
    let hoy = new Date();
    let unaSemanaFuturo = new Date()

    unaSemanaFuturo.setDate(hoy.getDate() + 7);

    let url = this.urlMovieDb + '/discover/movie?primary_release_date.gte=' +
        hoy.getFullYear() + '-'  + hoy.getMonth() + '-'  + hoy.getDate() +
        '&primary_release_date.lte=' + unaSemanaFuturo.getFullYear() + '-'  + (unaSemanaFuturo.getMonth() + 1) + '-'  +
        unaSemanaFuturo.getDate() + this.apiKey + '&language=es&callback=JSONP_CALLBACK';

    console.log(url);
    return this.jsonp.get(url).map(res => res.json());

  }

}
