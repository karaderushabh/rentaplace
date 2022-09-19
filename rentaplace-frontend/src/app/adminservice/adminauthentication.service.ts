import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner } from '../owner.model';

@Injectable({
  providedIn: 'root',
})
export class AdminauthenticationService {
  constructor(private http: HttpClient) {}
  public owner: Owner[] = [];
  public isadminright: boolean = false;
  adminauthenticate(ownername: string, ownerpassword: string) {
    this.http
      .get<Owner[]>('http://localhost:8080/api/owner')
      .subscribe((response) => {
        this.owner = response;
        console.log(this.owner);
      });
    for (let i = 0; i < this.owner.length; i++) {
      if (
        this.owner[i].email == ownername &&
        this.owner[i].password == ownerpassword
      ) {
        this.isadminright = true;
      } else {
        alert('Bad Credentials!');
      }
    }
    if (this.isadminright) {
      sessionStorage.setItem('ownername', ownername);
      return true;
    } else {
      return false;
    }
  }

  isAdminLoggedIn() {
    let owner = sessionStorage.getItem('ownername');
    console.log(!(owner === null));
    return !(owner === null);
  }
  adminlogOut() {
    this.isadminright = false;

    sessionStorage.removeItem('ownername');
  }
}
