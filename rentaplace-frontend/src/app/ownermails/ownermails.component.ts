import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Email } from '../emailmodule.model';

@Component({
  selector: 'app-ownermails',
  templateUrl: './ownermails.component.html',
  styleUrls: ['./ownermails.component.css'],
})
export class OwnermailsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  public ownermailinbox: Email[] = [];
  public ownercheckmailinbox: Email[] = [];

  ngOnInit(): void {
    this.http
      .get<Email[]>('http://localhost:8080/api/emails')
      .subscribe((response) => {
        this.ownermailinbox = response;
        console.log(this.ownermailinbox);
        for (let i = 0; i < this.ownermailinbox.length; i++) {
          if (
            sessionStorage.getItem('ownername') ==
            this.ownermailinbox[i].owneremail
          ) {
            this.ownercheckmailinbox[i] = this.ownermailinbox[i];
          }
        }
      });
  }
}
