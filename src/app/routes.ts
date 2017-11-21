
import {RouterModule, Routes} from '@angular/router';

import { BuscarComponent } from './components/buscar/buscar.component';
import { HomeComponent } from 'app/components/home/home.component';
import { DetalleComponent } from './components/detalle/detalle.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscar',      component: BuscarComponent },
  { path: 'detalle/:id',      component: DetalleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(appRoutes);
