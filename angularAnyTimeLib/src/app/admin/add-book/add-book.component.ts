import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService }  from '../../Services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BackendAuthService } from '../../Services/backend-auth.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  constructor(private router: Router,
    private validate:AuthService,
    private flashMessage: FlashMessagesService,
    ) { }

  ngOnInit() {
  }

  onAddBook(form: NgForm){
const book={
  isbn:form.value.isbn,
  title:form.value.title,
  subtitle:form.value.subtitle,
  author:form.value.author,
  published:form.value.published,
  publisher:form.value.publisher,
  pages:form.value.pages,
  description:form.value.description,
  image:form.value.image,
  genre:form.value.genre,
  quantity:"5"
}
   console.log("new book to add", book);
   this.flashMessage.show(" New book added ", {cssClass: 'alert-success', timeout: 4000
  });
  this.router.navigate(['admin'])
//API TO add BOOK PENDING

  }

}
