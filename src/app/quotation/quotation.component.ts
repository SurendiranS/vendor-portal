import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {HttpClient} from '@angular/common/http';


export interface Item {
  DOC_NUMBER: string;
  DOC_ITEM: string ;
  SHORT_TEXT: string;
  PUR_MATERIAL: string;
  TARGET_QUANTITY: string;
  QUOTATION_DEADLINE: string;
  NET_PRICE: string;
  GROSS_VALUE:string;
  CHANGED_DATE:string;
  STATUS:string;
} 

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {

  ELEMENT_DATA: Item[]=[];
  displayedColumns: string[] = ['DOC_NUMBER', 'DOC_ITEM', 'SHORT_TEXT', 'PUR_MATERIAL','TARGET_QUANTITY','QUOTATION_DEADLINE','NET_PRICE',
  'GROSS_VALUE','CHANGED_DATE','STATUS'];
  dataSource =new MatTableDataSource<Item>(this.ELEMENT_DATA);
  result : any;
  // var time = new Date();
  // time = 
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let res=this.http.post('http://localhost:3000/payment',undefined);
    res.subscribe(result => this.dataSource.data = result as Item[]);
    // this.dataSource.data.push
    console.log(this.dataSource);
  }
}



