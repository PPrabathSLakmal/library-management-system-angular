import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Member} from "../../../dto/Member";
import {Book} from "../../../dto/Book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  bookList:Array<Book>=[];
  constructor(private http:HttpClient) {
    this.getBooks();
  }
  getBooks(){
    this.http.get<Book[]>("http://localhost:8080/app/api/v1/books").subscribe((bookList:Array<Book>)=> {
      this.bookList = bookList;
      console.log(this.bookList);
    });
  }
  deleteBook (bookIsbn:string){
    this.http.delete(`http://localhost:8080/app/api/v1/books/${bookIsbn}`).subscribe();
    this.getBooks();
  }
}
