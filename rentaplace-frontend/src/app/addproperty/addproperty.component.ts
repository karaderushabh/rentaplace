import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IsreservedService } from '../isreserved.service';
import { Owner } from '../owner.model';
import { Postproperty } from './postproperty.model';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css'],
})
export class AddpropertyComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private posthomeservice: IsreservedService
  ) {}
  public owner: Owner[] = [];
  public oid: number = 0;
  public propertytype: string = '';
  public address: string = '';
  public features: string = '';
  public rentpricepermonth: string = '';
  public isreserved: string = '';
  public objectpropertytopost: Postproperty = {} as Postproperty;
  public ownermailcheck: string = sessionStorage.getItem('ownername') as string;

  ngOnInit(): void {
    this.http
      .get<Owner[]>('http://localhost:8080/api/owner')
      .subscribe((response) => {
        this.owner = response;
        for (let j = 0; j < 1; j++) {
          if (this.ownermailcheck == this.owner[j].email) {
            this.oid = this.owner[j].oid;
            console.log(this.oid);
          }
        }
      });
  }

  addProperty(
    propertytype: string,
    address: string,
    features: string,
    rentpricepermonth: string
  ) {
    if (
      propertytype.length > 0 &&
      address.length > 0 &&
      features.length > 0 &&
      rentpricepermonth.length > 0
    ) {
      this.objectpropertytopost.propertytype = propertytype;
      this.objectpropertytopost.address = address;
      this.objectpropertytopost.features = features;
      this.objectpropertytopost.rentpricepermonth = rentpricepermonth;
      this.objectpropertytopost.isreserved = 0;
      this.postinproperty();
      alert('Property added in Property List');
    } else {
      alert('Please fill all the fields');
    }
  }
  postinproperty(): void {
    this.posthomeservice
      .postinproperty(this.objectpropertytopost, this.oid)
      .subscribe((data) => {
        alert('Property added in Property List');
      });
  }
}
