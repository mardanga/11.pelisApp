import { PeliculasService } from './../../services/peliculas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  cartelera: any;
  populares: any;
  chicos: any;

  constructor(private peliSrv: PeliculasService) {
      this.peliSrv.getEnCartelera()
        .subscribe(data => {
          this.cartelera = data;
        });

      this.peliSrv.getPopulares()
        .subscribe(data => {
          this.populares = data;
        });

      this.peliSrv.getPopularesChicos()
        .subscribe(data => {
          this.chicos = data;
        });
   }
}
