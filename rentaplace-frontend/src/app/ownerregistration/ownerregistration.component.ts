import { Component, OnInit } from '@angular/core';
import { IsreservedService } from '../isreserved.service';
import { Owner } from '../owner.model';

@Component({
  selector: 'app-ownerregistration',
  templateUrl: './ownerregistration.component.html',
  styleUrls: ['./ownerregistration.component.css'],
})
export class OwnerregistrationComponent implements OnInit {
  public ownername: string = '';
  public owneremail: string = '';
  public ownerpassword: string = '';
  public owner: Owner = {} as Owner;
  constructor(private ownerregisterservice: IsreservedService) {}

  ngOnInit(): void {}
  register(ownername: string, owneremail: string, ownerpassword: string) {
    if (
      ownername.length > 0 &&
      owneremail.length > 0 &&
      ownerpassword.length > 0
    ) {
      this.owner.email = owneremail;
      this.owner.name = ownername;
      this.owner.password = ownerpassword;
      this.ownerregistration();
    } else {
      alert('Empty fields are not allowed');
    }
  }
  ownerregistration(): void {
    this.ownerregisterservice
      .ownerregistration(this.owner)
      .subscribe((data) => {
        alert('Owner Registration completed now please login');
      });
  }
}
