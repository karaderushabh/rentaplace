import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthenticationService } from '../adminservice/adminauthentication.service';

@Component({
  selector: 'app-adminlogout',
  templateUrl: './adminlogout.component.html',
  styleUrls: ['./adminlogout.component.css'],
})
export class AdminlogoutComponent implements OnInit {
  constructor(
    private adminauthenticationservice: AdminauthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.adminauthenticationservice.adminlogOut();
    this.router.navigate(['ownerlogin']);
  }
}
