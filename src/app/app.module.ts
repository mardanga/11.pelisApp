
import {JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// servicios
import { PeliculasService } from './services/peliculas.service';

// paginas
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// rutas
import { APP_ROUTING } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    DetalleComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    APP_ROUTING
  ],
  providers: [ PeliculasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
