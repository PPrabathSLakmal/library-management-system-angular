import { Component } from '@angular/core';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent {
  newBookHide: any;


  newBook() {
    this.newBookHide='d-none'
  }


}
