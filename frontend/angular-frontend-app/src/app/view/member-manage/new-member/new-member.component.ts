import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Member} from "../../../dto/Member";

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.scss']
})
export class NewMemberComponent {
  newMemberHide: any;
  constructor(private http:HttpClient) {}

  newMember(id: HTMLInputElement, name: HTMLInputElement, address: HTMLInputElement, contact: HTMLInputElement) {
    this.http.post("http://localhost:8080/app/api/v1/members",new Member(id.value,name.value,address.value,contact.value)).subscribe();
    this.newMemberHide='d-none'
  }
}
