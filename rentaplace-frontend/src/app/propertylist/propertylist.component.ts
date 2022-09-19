import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking.model';
import { Email } from '../emailmodule.model';
import { IsreservedService } from '../isreserved.service';
import { User } from '../service/user.model';
import { Property } from './property.model';

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrls: ['./propertylist.component.css'],
  providers: [IsreservedService],
})
export class PropertylistComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private reservationservice: IsreservedService,
    private bookingservice: IsreservedService,
    private emailservice: IsreservedService
  ) {}
  public title = 'custom-search-filter-example';
  public searchedKeyword: string = '';
  public checkout: string = '';
  public checkin: string = '';
  public property: Property[] = [];
  public user: User[] = [];
  public uid: number = 0;
  public homeid: number = 0;
  public tenantname: string = '';
  public tenantmail: string = '';

  public booking: Booking = {} as Booking;
  public updatereserve: Property = {} as Property;
  public email: Email = {} as Email;
  ngOnInit(): void {
    this.http
      .get<User[]>('http://localhost:8080/api/user')
      .subscribe((response) => {
        this.user = response;
        console.log(this.user);
      });

    this.http
      .get<Property[]>('http://localhost:8080/api/home')
      .subscribe((response) => {
        this.property = response;
        // console.log(this.property);
        // console.log(sessionStorage.getItem('username'));
      });
  }
  reserve(home: Property, checkin: string, checkout: string) {
    if (checkin.length > 0 && checkout.length > 0) {
      this.updatereserve = home;
      this.updatereservation();
    }
  }
  addinbooking(home: Property, checkin: string, checkout: string) {
    // if (
    //   this.uid != 0 &&
    //   checkin.length > 0 &&
    //   checkout.length > 0 &&
    //   home.isreserved == 1
    // )
    for (let i = 0; i < this.user.length; i++) {
      if (this.user[i].email == sessionStorage.getItem('username')) {
        this.uid = this.user[i].uid;
        this.tenantname = this.user[i].name;
        this.tenantmail = this.user[i].email;
      }
    }
    this.booking.checkin = checkin;
    this.booking.checkout = checkout;
    this.homeid = home.hid;
    this.updatereserve = home;
    this.booking.isconfirmbyowner = 0;
    this.postinbooking();
  }
  updatereservation(): void {
    this.reservationservice
      .updatereservation(this.updatereserve, this.updatereserve.hid, 1)
      .subscribe((data) => {
        alert('Property is now reserved');
      });
    this.ngOnInit();
  }
  postinbooking(): void {
    console.log('Home' + this.homeid);
    this.bookingservice
      .postinbooking(this.booking, this.homeid, this.uid)
      .subscribe((data) => {
        alert('Property added in booking list');
      });
  }

  addinmail(home: Property, checkin: string, checkout: string) {
    this.email.message =
      'Tenant named ' +
      this.tenantname +
      ' has booked your ' +
      home.propertytype +
      ' at ' +
      home.address +
      ' from ' +
      checkin +
      ' to ' +
      checkout +
      '. So please as per your wish you can either confirm the reservation or cancel it.';

    this.email.owneremail = home.owner.email;
    this.email.useremail = this.tenantmail;
    this.postamail();
  }
  postamail(): void {
    this.emailservice.postamail(this.email).subscribe((data) => {
      alert('Mail sent to owner');
    });
  }
}
