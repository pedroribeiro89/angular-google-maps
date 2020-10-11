import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CepMapComponent} from './cep-map/cep-map.component';
import {MapDirectionsComponent} from './map-directions/map-directions.component';


const routes: Routes = [
  {path: '', component: CepMapComponent},
  {path: 'directions', component: MapDirectionsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
