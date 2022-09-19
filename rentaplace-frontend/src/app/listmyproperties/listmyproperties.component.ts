import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IsreservedService } from '../isreserved.service';
import { Property } from '../propertylist/property.model';

@Component({
  selector: 'app-listmyproperties',
  templateUrl: './listmyproperties.component.html',
  styleUrls: ['./listmyproperties.component.css'],
})
export class ListmypropertiesComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private deletepropertyservice: IsreservedService
  ) {}
  public property: Property[] = [];
  public hid: number = 0;
  public ownerproperty: Property[] = [];
  ngOnInit(): void {
    this.http
      .get<Property[]>('http://localhost:8080/api/home')
      .subscribe((response) => {
        this.property = response;
        console.log(this.property);
        for (let i = 0; i < this.property.length; i++) {
          if (
            sessionStorage.getItem('ownername') == this.property[i].owner.email
          ) {
            this.ownerproperty[i] = this.property[i];
          }
        }
      });
  }
  deleteprop(home: Property) {
    if (home.isreserved == 1) {
      alert(
        'First delete the booking associated with this property then you can delete this property'
      );
      return;
    }
    this.hid = home.hid;
    if (
      confirm(
        'Are you sure you want to delete this ' +
          home.propertytype +
          ' at ' +
          home.address +
          '?'
      )
    ) {
      if (this.hid != 0) {
        this.deletepropertybyId();
        location.reload();
      }
    }
  }
  deletepropertybyId(): void {
    console.log('inside');
    this.deletepropertyservice
      .deletepropertybyId(this.hid)
      .subscribe((data) => {
        alert('Property deleted');
      });
  }
}
