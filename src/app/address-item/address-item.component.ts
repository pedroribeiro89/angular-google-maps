import {Component, Input, OnInit} from '@angular/core';
import {IViacepAddress} from '@pedroribeiro89/angular-cep/lib/viacep-address';

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.scss']
})
export class AddressItemComponent implements OnInit {

  @Input() address: IViacepAddress;

  constructor() { }

  ngOnInit(): void {
  }

}
