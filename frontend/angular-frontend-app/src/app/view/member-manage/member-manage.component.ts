import { Component } from '@angular/core';

@Component({
  selector: 'app-member-manage',
  templateUrl: './member-manage.component.html',
  styleUrls: ['./member-manage.component.scss']
})
export class MemberManageComponent {

  public invisible: any='visible';
  public visible:any = 'd-none';

  newMember() {
    this.visible = 'visible';
    this.invisible = 'd-none'
  }
}
