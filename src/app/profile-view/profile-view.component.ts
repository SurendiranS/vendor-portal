import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  constructor(private http: HttpClient) { }
  output:any;
  ngOnInit(): void {
    this.http.post('http://localhost:3000/vendorDetails', undefined).subscribe(result => {
      console.log(result);
      this.output = result;
      this.output = this.output['IT_OUT']
      console.log(this.output);
    });
  }
}
