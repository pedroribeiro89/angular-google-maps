import {Component, OnInit} from '@angular/core';
import {IViacepAddress} from '@pedroribeiro89/angular-cep/lib/viacep-address';

declare var google: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  INIT_CENTER = {lat: -10.3333333, lng: -53.2};
  INIT_ZOOM = 4;

  mapOptions: google.maps.MapOptions = {
    center: this.INIT_CENTER,
    zoom: this.INIT_ZOOM
  };
  geocoder: google.maps.Geocoder;// = new google.maps.Geocoder();
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  constructor() {}

  ngOnInit(): void {
    this.geocoder = new google.maps.Geocoder();
  }

  addAddress(address: IViacepAddress) {
    this.geocoder.geocode({ address: `${address.logradouro}, ${address.bairro}, ${address.localidade}, ${address.uf}` }, (results, status) => {
      if (status === 'OK') {
        this.markerPositions.push({lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()});
        this.mapOptions = {
          center: {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          },
          zoom: 6
        };
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

}
