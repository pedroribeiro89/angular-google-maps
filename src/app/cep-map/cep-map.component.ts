import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MapComponent} from '../map/map.component';
import {IViacepAddress, IViacepAddressError} from '@pedroribeiro89/angular-cep/lib/viacep-address';

@Component({
  selector: 'app-cep-map',
  templateUrl: './cep-map.component.html',
  styleUrls: ['./cep-map.component.scss']
})
export class CepMapComponent implements OnInit {

  cep: string;
  currentAddress: IViacepAddress;
  addressList: IViacepAddress[] = [];
  @ViewChild(MapComponent) mapComponent: MapComponent;

  constructor() { }

  ngOnInit(): void {}

  addAddress() {
    this.addressList.push(this.currentAddress);
    this.mapComponent.addAddress(this.currentAddress);
    this.currentAddress = null;
  }

  loadedCep(address: IViacepAddress | IViacepAddressError) {
    if ((address as IViacepAddressError).erro) {
      this.currentAddress = null;
    } else {
      console.log(address);
      this.currentAddress = address as IViacepAddress;
    }
  }


}
