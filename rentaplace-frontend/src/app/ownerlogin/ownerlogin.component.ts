import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthenticationService } from '../adminservice/adminauthentication.service';

@Component({
  selector: 'app-ownerlogin',
  templateUrl: './ownerlogin.component.html',
  styleUrls: ['./ownerlogin.component.css'],
})
export class OwnerloginComponent implements OnInit {
  ownername = 'owner';
  ownerpassword = '';
  admininvalidLogin = false;
  constructor(
    private router: Router,
    private adminloginservice: AdminauthenticationService
  ) {}

  ngOnInit(): void {}
  checkadminlogin() {
    if (
      this.adminloginservice.adminauthenticate(
        this.ownername,
        this.ownerpassword
      )
    ) {
      this.router.navigate(['/admindashboard']);
      this.admininvalidLogin = false;
    } else this.admininvalidLogin = true;
  }
}
