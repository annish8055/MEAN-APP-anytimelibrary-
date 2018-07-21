import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AuthService } from './Services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { AddBookComponent } from './admin/add-book/add-book.component';
import { DeleteBookComponent } from './admin/delete-book/delete-book.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { HistoryComponent } from './user/history/history.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ReturnRenewComponent } from './user/return-renew/return-renew.component';
import { DropdownDirective } from './Directives/dropdown.directive';
import { DropForHeaderDirective } from './drop-for-header.directive';
import { BackendAuthService } from './Services/backend-auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { bookList } from './Services/boodata.service';
import { FilterbookPipe } from './Pipes/filterbook.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DropdownDirective,
    SignupComponent,
    AdminComponent,
    AddBookComponent,
    DeleteBookComponent,
    UserListComponent,
    BooksComponent,
    BookDetailComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    UserComponent,
    HistoryComponent,
    ProfileComponent,
    ReturnRenewComponent,
    DropForHeaderDirective,
    AdminHeaderComponent,
    FilterbookPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [AuthService,BackendAuthService,AuthGuard,bookList],
  bootstrap: [AppComponent]
})
export class AppModule { }
