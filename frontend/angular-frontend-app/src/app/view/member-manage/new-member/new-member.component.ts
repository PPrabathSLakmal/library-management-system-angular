import { Component } from '@angular/core';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.scss']
})
export class NewMemberComponent {
  newMemberHide: any;


  newMember() {
    this.newMemberHide='d-non'
  }
}
