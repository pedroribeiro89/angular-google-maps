import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {IViacepAddress, IViacepAddressError} from '@pedroribeiro89/angular-cep/lib/viacep-address';
import {GoogleMap} from '@angular/google-maps';
declare var google: any;
@Component({
  selector: 'app-map-directions',
  templateUrl: './map-directions.component.html',
  styleUrls: ['./map-directions.component.scss']
})
export class MapDirectionsComponent implements OnInit, AfterViewInit {

  @ViewChild(GoogleMap) map: GoogleMap;

  INIT_CENTER = {lat: -10.3333333, lng: -53.2};
  INIT_ZOOM = 4;
  mapOptions: google.maps.MapOptions = {
    center: this.INIT_CENTER,
    zoom: this.INIT_ZOOM
  };

  public originAddress: IViacepAddress;
  public destinationAddress: IViacepAddress;

  private directionsService: google.maps.DirectionsService;
  private directionsRenderer: google.maps.DirectionsRenderer;

  constructor() { }

  ngAfterViewInit() {
    console.log(this.map);
    this.initMap();
  }

  ngOnInit(): void {
  }

  onLoadedCep(address: IViacepAddress | IViacepAddressError, isOrigin: boolean) {
    if ((address as IViacepAddressError).erro && isOrigin) {
      this.originAddress = null;
    } else if ((address as IViacepAddressError).erro && !isOrigin) {
      this.destinationAddress = null;
    } else if (isOrigin) {
      this.originAddress = address as IViacepAddress;
    } else {
      this.destinationAddress = address as IViacepAddress;
    }
    if (this.originAddress && this.destinationAddress) { this.calculateAndDisplayRoute(); }
  }

  initMap(): void {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsRenderer.setMap(this.map.googleMap);
  }

  calculateAndDisplayRoute() {
    this.directionsService.route(
      {
        origin: {
          query: `${this.originAddress.logradouro}, ${this.originAddress.bairro}, ${this.originAddress.localidade}, ${this.originAddress.uf}`,
        },
        destination: {
          query: `${this.destinationAddress.logradouro}, ${this.destinationAddress.bairro}, ${this.destinationAddress.localidade}, ${this.destinationAddress.uf}`,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === 'OK') {
          this.directionsRenderer.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      }
    );
  }

}
