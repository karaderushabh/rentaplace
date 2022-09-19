import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetChat } from '../getchat.model';
import { IsreservedService } from '../isreserved.service';
import { Owner } from '../owner.model';
import { PostChat } from '../postchat.model';

@Component({
  selector: 'app-chatowner',
  templateUrl: './chatowner.component.html',
  styleUrls: ['./chatowner.component.css'],
})
export class ChatownerComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private postingownerchatservice: IsreservedService
  ) {}
  public ochat: GetChat[] = [];
  public owner: Owner[] = [];
  public sendername: string = '';
  public rname: string = '';
  ownermsg: string = '';

  public currentownermail: string = sessionStorage.getItem(
    'ownername'
  ) as string;
  public postchat: PostChat = {} as PostChat;
  ngOnInit(): void {
    this.http
      .get<Owner[]>('http://localhost:8080/api/owner')
      .subscribe((response) => {
        this.owner = response;

        for (let j = 0; j < 1; j++) {
          if (this.currentownermail == this.owner[j].email) {
            this.sendername = this.owner[j].name;
          }
        }
      });
    this.http
      .get<GetChat[]>('http://localhost:8081/chat/api/chat')
      .subscribe((data) => {
        this.ochat = data;
        console.log(this.ochat);
      });
  }
  ownersend(ownermsg: string, rname: string) {
    if (this.ownermsg.length > 0 && rname.length > 0) {
      this.postchat.message = ownermsg;
      this.postchat.sendername = this.sendername;
      this.postchat.recievername = this.rname;
      this.postchats();
      //here  method will come
    } else {
      alert('Message or reciever name cannot be empty ');
    }
  }

  postchats(): void {
    this.postingownerchatservice.postchats(this.postchat).subscribe((data) => {
      alert('Message sent!');
      this.ngOnInit();
      this.ownermsg = '';
      this.rname = '';
    });
  }
}
