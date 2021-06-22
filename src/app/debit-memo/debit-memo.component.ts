import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {HttpClient} from '@angular/common/http';

export interface Item {
  GJAHR: string;
  AUGDT: string;
  AUGBL: string;
  PSWBT: string;
  PSWSL: string;
  BELNR: string;
  ZFBDT: string;
  BUZEI: string;
}  

@Component({
  selector: 'app-debit-memo',
  templateUrl: './debit-memo.component.html',
  styleUrls: ['./debit-memo.component.css']
})
export class DebitMemoComponent implements OnInit {
  ELEMENT_DATA: Item[]=[];
  displayedColumns: string[]=['GJAHR','AUGDT','AUGBL','PSWBT','PSWSL','BELNR','ZFBDT','BUZEI'];
  dataSource =new MatTableDataSource<Item>(this.ELEMENT_DATA);

  constructor(private http: HttpClient) { }
  result : any;
  ngOnInit(): void {
    let res=this.http.post('http://localhost:3000/debit',undefined);
    res.subscribe(result => this.dataSource.data = result as Item[]);
    // this.dataSource.data.push
    console.log(this.dataSource);
  }
}