import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {HttpClient} from '@angular/common/http';

export interface Item {
  MAT_NUMBER: string;
  DOC_YEAR: string;
  TR_EV_TYPE: string;
  PSTING_DATE: string;
  ENTRY_DATE: string;
  ENTRY_TIME: string;
  USERNAME: string;
  VER_GR_GI_SLIP: string;
}
export interface Item1 {
  MAT_NUMBER: string;
  DOC_YEAR: string;
  MATDOC_ITM: string;
  MATERIAL: string;
  PLANT: string;
  VENDOR: string;
  ENTRY_QUAN: string;
  ENT: string;
  PO_NUMBER: string;
  PO_IT: string;
}

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  ELEMENT_DATA: Item[] = [];
  ELEMENT_DATA1: Item1[] = [];
  displayedColumns: string[] = ['MAT_NUMBER', 'DOC_YEAR', 'TR_EV_TYPE', 'PSTING_DATE', 'ENTRY_DATE', 'ENTRY_TIME', 'USERNAME',
    'VER_GR_GI_SLIP'];
  displayedColumns1: string[] = ['MAT_NUMBER', 'DOC_YEAR', 'MATDOC_ITM', 'MATERIAL', 'PLANT', 'VENDOR', 'ENTRY_QUAN',
    'ENT', 'PO_NUMBER' , 'PO_IT'];
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

  downloadPdf(base64String, fileName) {
    const source = `data:application/pdf;base64,${base64String}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}.pdf`
    link.click();
  }
  onClickDownloadPdf(){
    let base64String = "your-base64-string";
    this.downloadPdf(base64String,"sample");
  }
}