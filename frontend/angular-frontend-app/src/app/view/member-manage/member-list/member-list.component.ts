import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Member} from "../../../dto/Member";

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent {
  memberList:Array<Member>=[];
  constructor(private http:HttpClient) {
    this.getMembers();
  }
  getMembers(){
    this.http.get<Member[]>("http://localhost:8080/app/api/v1/members").subscribe((memberList:Array<Member>)=> {
      this.memberList = memberList;
      console.log(this.memberList);
    });
  }
  deleteMember (memberId:string){
    this.http.delete(`http://localhost:8080/app/api/v1/members/${memberId}`).subscribe();
    this.getMembers();
  }

}
