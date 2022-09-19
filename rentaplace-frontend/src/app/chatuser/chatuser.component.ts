import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetChat } from '../getchat.model';
import { IsreservedService } from '../isreserved.service';
import { PostChat } from '../postchat.model';
import { User } from '../service/user.model';

@Component({
  selector: 'app-chatuser',
  templateUrl: './chatuser.component.html',
  styleUrls: ['./chatuser.component.css'],
})
export class ChatuserComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private postinguserchatservice: IsreservedService
  ) {}
  public uchat: GetChat[] = [];
  public user: User[] = [];
  public sendername: string = '';
  public rname: string = '';
  usermsg: string = '';
  public postchat: PostChat = {} as PostChat;
  public currentusermail: string = sessionStorage.getItem('username') as string;
  ngOnInit(): void {
    this.http
      .get<User[]>('http://localhost:8080/api/user')
      .subscribe((response) => {
        this.user = response;
        for (let j = 0; j < 1; j++) {
          if (this.currentusermail == this.user[j].email) {
            this.sendername = this.user[j].name;
          }
        }
      });
    this.http
      .get<GetChat[]>('http://localhost:8081/chat/api/chat')
      .subscribe((data) => {
        this.uchat = data;
        console.log(this.uchat);
      });
  }

  usersend(usermsg: string, rname: string) {
    if (this.usermsg.length > 0 && rname.length > 0) {
      this.postchat.message = usermsg;
      this.postchat.sendername = this.sendername;
      this.postchat.recievername = this.rname;
      this.postchats();
    } else {
      alert('Message or reciever name cannot be empty ');
    }
  }

  postchats(): void {
    this.postinguserchatservice.postchats(this.postchat).subscribe((data) => {
      alert('Message sent!');
      this.ngOnInit();
      this.usermsg = '';
      this.rname = '';
    });
  }
}
