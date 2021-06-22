import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

export interface Item {
  DOC_NUMBER: string;
  COMPANYCODE: string;
  PURCH_ORG: string;
  PURCH_GROUP: string;
  DOC_DATE: string;
  QUOTATION_DEADLIN: string;
  CREATED_BY: string;
  LAST_ITEM: string;
  ITEM_INTVL: string;
}
export interface Item1 {
  DOC_NUMBER: string;
  COMPANYCODE: string;
  PURCH_ORG: string;
  PURCH_GROUP: string;
  DOC_DATE: string;
  QUOTATION_DEADLIN: string;
  CREATED_ON: string;
  CREATED_BY: string;
  LAST_ITEM: string;
  ITEM_INTVL: string;
}
@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {
  ELEMENT_DATA: Item[] = [];
  ELEMENT_DATA1: Item1[] = [];
  displayedColumns: string[] = ['DOC_NUMBER', 'COMPANYCODE', 'PURCH_ORG', 'PURCH_GROUP', 'DOC_DATE', 'QUOTATION_DEADLIN', 'CREATED_BY',
    'LAST_ITEM','ITEM_INTVL'];
  displayedColumns1: string[] = ['DOC_NUMBER', 'COMPANYCODE', 'PURCH_ORG', 'PURCH_GROUP', 'DOC_DATE', 'QUOTATION_DEADLIN', 'CREATED_ON',
    'CREATED_BY', 'LAST_ITEM' , 'ITEM_INTVL'];
  dataSource = new MatTableDataSource<Item>(this.ELEMENT_DATA);
  dataSource1 = new MatTableDataSource<Item1>(this.ELEMENT_DATA1);
  result: any;
  result1: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    let res = this.http.post('http://localhost:3000/purchase/HEADER_TABLE', undefined);
    res.subscribe(result => this.dataSource.data = result as Item[]);
    let res1 = this.http.post('http://localhost:3000/purchase/ITEM_TABLE', undefined);
    res1.subscribe(result1 => this.dataSource1.data = result1 as Item1[]);
    console.log(this.dataSource);
  }
}