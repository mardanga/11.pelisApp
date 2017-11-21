import { PeliculasService } from './../../services/peliculas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  populares: any;
  constructor(private peliSrv: PeliculasService) {
      this.peliSrv.getEnCartelera()
        .subscribe(pops => {
          console.log(pops);
          this.populares = pops
        });
   }


}
