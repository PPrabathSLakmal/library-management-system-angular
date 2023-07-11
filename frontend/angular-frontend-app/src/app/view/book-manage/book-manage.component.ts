import { Component } from '@angular/core';

@Component({
  selector: 'app-book-manage',
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.scss']
})
export class BookManageComponent {
  public invisible: any='visible';
  public visible:any = 'd-none';

  newBook() {
    this.visible = 'visible';
    this.invisible = 'd-none'
  }
}
