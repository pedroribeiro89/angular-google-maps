import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CepMapComponent } from './cep-map/cep-map.component';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AddressItemComponent } from './address-item/address-item.component';
import { AddressListComponent } from './address-list/address-list.component';
import {AngularCepModule} from '@pedroribeiro89/angular-cep';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MapDirectionsComponent } from './map-directions/map-directions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CepMapComponent,
    MapComponent,
    AddressItemComponent,
    AddressListComponent,
    MapDirectionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AngularCepModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
