import { Component, OnInit, Input} from '@angular/core';
import { book } from '../../Models/book.model';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  @Input() bookData:book;
  @Input() show:boolean;
  constructor(private flashMessage: FlashMessagesService,
              private router:Router) { }

  ngOnInit() {
  }

  onClickTake(){
    this.flashMessage.show(" Book "+this.bookData.title+" has been to your reading list", {cssClass: 'alert-success', timeout: 4000
  });

  this.show=!this.show;
  }

}
