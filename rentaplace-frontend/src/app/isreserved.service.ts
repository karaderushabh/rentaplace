import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { Postproperty } from './addproperty/postproperty.model';
import { Booking } from './booking.model';
import { Email } from './emailmodule.model';
import { Owner } from './owner.model';
import { PostChat } from './postchat.model';
import { Property } from './propertylist/property.model';
import { User } from './service/user.model';

@Injectable({
  providedIn: 'root',
})
export class IsreservedService {
  private putUrl: string;
  private postUrl: string;
  private postmailUrl: string;
  private userregisterurl: string;
  private updateownerconfirmation: string;
  private deletebookingUrl: string;
  private postownerUrl: string;
  private postchatUrl: string;
  constructor(private http: HttpClient) {
    this.postownerUrl = 'http://localhost:8080/api/owner';
    this.putUrl = 'http://localhost:8080/api/home/';
    this.postUrl = 'http://localhost:8080/api/booking/';
    this.postmailUrl = 'http://localhost:8080/api/emails';
    this.userregisterurl = 'http://localhost:8080/api/user';
    this.updateownerconfirmation = 'http://localhost:8080/api/booking/';
    this.deletebookingUrl = 'http://localhost:8080/api/booking/';
    this.postchatUrl = 'http://localhost:8081/chat/api/chat';
  }
  public updatereservation(home: Property, hid: number, isreserved: number) {
    return this.http.put<Property>(this.putUrl + hid + '/' + isreserved, home);
  }
  public deletebookingbyid(bookingid: number) {
    return this.http.delete<Booking>(this.deletebookingUrl + bookingid);
  }
  public updatereservationbackto0(
    home: Property,
    hid: number,
    isreserved: number
  ) {
    return this.http.put<Property>(this.putUrl + hid + '/' + isreserved, home);
  }
  public updateconfirmation(
    booking: Booking,
    bookingid: number,
    isconfirmbyowner: number
  ) {
    return this.http.put<Booking>(
      this.updateownerconfirmation + bookingid + '/' + isconfirmbyowner,
      booking
    );
  }
  public deletepropertybyId(hid: number) {
    return this.http.delete<Property>(this.putUrl + hid);
  }
  public postinbooking(booking: Booking, hid: number, uid: number) {
    return this.http.post<Booking>(this.postUrl + hid + '/' + uid, booking);
  }
  public postinproperty(home: Postproperty, oid: number) {
    return this.http.post<Postproperty>(this.putUrl + oid, home);
  }
  public postamail(email: Email) {
    return this.http.post<Email>(this.postmailUrl, email);
  }

  public userregistration(user: User) {
    return this.http.post<User>(this.userregisterurl, user);
  }
  public ownerregistration(owner: Owner) {
    return this.http.post<Owner>(this.postownerUrl, owner);
  }
  public postchats(chat: PostChat) {
    return this.http.post<PostChat>(this.postchatUrl, chat);
  }
}
