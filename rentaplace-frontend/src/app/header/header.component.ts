import { Component, OnInit } from '@angular/core';
import { AdminauthenticationService } from '../adminservice/adminauthentication.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {}
  constructor(
    public loginService: AuthenticationService,
    public adminloginservice: AdminauthenticationService
  ) {}
}
