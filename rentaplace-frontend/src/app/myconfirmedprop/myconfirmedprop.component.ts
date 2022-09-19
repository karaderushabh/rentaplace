import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetBooking } from '../admindashboard/getbooking.model';

@Component({
  selector: 'app-myconfirmedprop',
  templateUrl: './myconfirmedprop.component.html',
  styleUrls: ['./myconfirmedprop.component.css'],
})
export class MyconfirmedpropComponent implements OnInit {
  constructor(private http: HttpClient) {}
  public getbooking: GetBooking[] = [];
  public getuserconfirmedbooking: GetBooking[] = [];

  ngOnInit(): void {
    this.http
      .get<GetBooking[]>('http://localhost:8080/api/booking')
      .subscribe((response) => {
        this.getbooking = response;

        for (let i = 0; i < this.getbooking.length; i++) {
          if (
            sessionStorage.getItem('username') == this.getbooking[i].user.email
          ) {
            this.getuserconfirmedbooking[i] = this.getbooking[i];
          }
        }
      });
  }
}
