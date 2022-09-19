import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking.model';
import { IsreservedService } from '../isreserved.service';
import { Property } from '../propertylist/property.model';
import { GetBooking } from './getbooking.model';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],
})
export class AdmindashboardComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private confirmationservice: IsreservedService,
    private reservationtonull: IsreservedService,
    private deletebooking: IsreservedService
  ) {}
  public getbooking: GetBooking[] = [];
  public getownerbooking: GetBooking[] = [];
  public book: GetBooking = {} as GetBooking;
  public updatereserveback: Property = {} as Property;
  public bid: number = 0;

  ngOnInit(): void {
    this.http
      .get<GetBooking[]>('http://localhost:8080/api/booking')
      .subscribe((response) => {
        this.getbooking = response;

        for (let i = 0; i < this.getbooking.length; i++) {
          if (
            sessionStorage.getItem('ownername') ==
            this.getbooking[i].home.owner.email
          ) {
            this.getownerbooking[i] = this.getbooking[i];
          }
        }
      });
  }
  confirm(booking: GetBooking) {
    this.book = booking;
    this.updateconfirmation();
    location.reload();
  }
  updateconfirmation(): void {
    this.confirmationservice
      .updateconfirmation(this.book, this.book.bookingid, 1)
      .subscribe((data) => {
        alert('Booking Confirmed');
      });
  }
  cancelreservation(booking: GetBooking) {
    this.bid = booking.bookingid;
    this.updatereserveback = booking.home;
    this.updatereservationbackto0();
    if (this.bid != 0) {
      this.deletebookingbyid();
      // here delete method
    }
    location.reload();
  }

  updatereservationbackto0(): void {
    this.reservationtonull
      .updatereservationbackto0(
        this.updatereserveback,
        this.updatereserveback.hid,
        0
      )
      .subscribe((data) => {
        alert('Property reservation canceled');
      });
  }
  deletebookingbyid(): void {
    this.deletebooking.deletebookingbyid(this.bid).subscribe((data) => {
      alert('Booking Deleted');
    });
  }
}
