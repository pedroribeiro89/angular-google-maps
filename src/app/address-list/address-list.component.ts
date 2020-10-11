import {Component, Input, OnInit} from '@angular/core';
import {IViacepAddress} from '@pedroribeiro89/angular-cep/lib/viacep-address';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {

  @Input() list: IViacepAddress[];

  constructor() { }

  ngOnInit(): void {
  }

}
