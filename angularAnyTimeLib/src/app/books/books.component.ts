import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { bookList } from '../Services/boodata.service';
import { Response } from '@angular/http';
import { book } from '../Models/book.model';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  selectedbookdata:book;
//@Output() bookSelected = new EventEmitter<book>();
 show=false;
  booksList;
  bookse:book;
  searchedBook='';
  constructor(private bookdata: bookList,
              private router: Router,
              private flashMessage: FlashMessagesService) {
    bookdata.getBookData().subscribe(data => {
         console.log(data);
         if(data.success){
            this.booksList=data.msg;
         }else{
          this.router.navigate(['not-found']);
         }
    }     
    );
     }

  ngOnInit() {
  }
  onBookSearched(booksearched:string){
console.log("this book name has come to book component -",booksearched);
this.searchedBook=booksearched;
  }

  onClick(selectedBook:book){
    this.show=!this.show;
    this.bookse=selectedBook;
    console.log("boook \s out put",this.show);
    }

    onClickTake(bookData){
      this.flashMessage.show(" Book ("+bookData.title+") has been to your reading list", {cssClass: 'alert-success', timeout: 4000
    });
  
    this.show=!this.show;
    }
}
