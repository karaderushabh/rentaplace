import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IsreservedService } from '../isreserved.service';
import { Owner } from '../owner.model';
import { User } from '../service/user.model';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css'],
})
export class UserregistrationComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private userregistrationservice: IsreservedService,
    private route: Router
  ) {}
  public username: string = '';
  public useremail: string = '';
  public userpassword: string = '';

  public user: User = {} as User;
  ngOnInit(): void {}
  register(name: string, email: string, password: string) {
    if (name.length > 0 && email.length > 0 && password.length > 0) {
      this.user.name = name;
      this.user.email = email;
      this.user.password = password;
      this.userregistration();
    } else {
      alert('Empty fields are not allowed');
    }
  }

  userregistration(): void {
    this.userregistrationservice
      .userregistration(this.user)
      .subscribe((data) => {
        alert('User Registration completed now please login');
      });
  }
}
