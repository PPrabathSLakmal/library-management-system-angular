import { Component } from '@angular/core';
import {Member} from "../../../dto/Member";
import {Book} from "../../../dto/Book";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent {
  newBookHide: any;
  constructor(private http:HttpClient) {}
  newBook(isbn: HTMLInputElement, title: HTMLInputElement, author: HTMLInputElement) {
    this.http.post("http://localhost:8080/app/api/v1/books",new Book(isbn.value,title.value,author.value)).subscribe();
    this.newBookHide='d-none'
  }


}
