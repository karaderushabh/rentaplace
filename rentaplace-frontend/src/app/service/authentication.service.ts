import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}
  public user: User[] = [];
  public isright: boolean = false;
  authenticate(username: string, password: string) {
    this.http
      .get<User[]>('http://localhost:8080/api/user')
      .subscribe((response) => {
        this.user = response;
        console.log(this.user);
      });
    for (let i = 0; i < this.user.length; i++) {
      if (this.user[i].email == username && this.user[i].password == password) {
        this.isright = true;
      } else {
        alert('Bad Credentials!');
      }
    }
    if (this.isright) {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    this.isright = false;
    sessionStorage.removeItem('username');
  }
}
