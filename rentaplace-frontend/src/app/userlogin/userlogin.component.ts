import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
})
export class UserloginComponent implements OnInit {
  username = 'user';
  password = '';
  invalidLogin = false;

  constructor(
    private router: Router,
    private loginservice: AuthenticationService
  ) {}

  ngOnInit() {}

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)) {
      console.log('this');
      this.router.navigate(['/propertylist']);
      this.invalidLogin = false;
    } else this.invalidLogin = true;
  }
}
