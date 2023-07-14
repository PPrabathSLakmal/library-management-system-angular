import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MemberManageComponent } from './view/member-manage/member-manage.component';
import { BookManageComponent } from './view/book-manage/book-manage.component';
import { BookServiceComponent } from './view/book-service/book-service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibraryManagementSystemComponent } from './library-management-system/library-management-system.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './view/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { NewMemberComponent } from './view/member-manage/new-member/new-member.component';
import { MemberListComponent } from './view/member-manage/member-list/member-list.component';
import { BookListComponent } from './view/book-manage/book-list/book-list.component';
import { NewBookComponent } from './view/book-manage/new-book/new-book.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

const routes:Routes=[
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'members',
    component: MemberManageComponent
  },
  {
    path:'books',
    component: BookManageComponent
  },
  {
    path:'services',
    component: BookServiceComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MemberManageComponent,
    BookManageComponent,
    BookServiceComponent,
    LibraryManagementSystemComponent,
    NavComponent,
    HomeComponent,
    NewMemberComponent,
    MemberListComponent,
    BookListComponent,
    NewBookComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
