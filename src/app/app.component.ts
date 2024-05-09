import { Component } from '@angular/core';

export interface ListData {
  orderId: string | number;
  shipperName: string;
  consigneeName: string;
  carrier: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchTerm: string;
  filterType: string = 'orderId';
  listData: ListData[] = [
    {
      orderId: 1,
      shipperName: 'Shipper A',
      consigneeName: 'Consignee X',
      carrier: 'Carrier 1',
    },
    {
      orderId: 2,
      shipperName: 'Shipper B',
      consigneeName: 'Consignee Y',
      carrier: 'Carrier 2',
    },
    {
      orderId: 3,
      shipperName: 'Shipper C',
      consigneeName: 'Consignee Z',
      carrier: 'Carrier 3',
    },
  ];

  constructor() {}

  changeFilterType(event: any) {
    // console.log(event.target.value)
    this.filterType = event.target.value;
  }
}
