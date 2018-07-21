import { Component, OnInit } from '@angular/core';
import { bookList } from '../../Services/boodata.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {
  booksList;
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

     onDelClick(title){
       console.log(title.isbn);
      this.flashMessage.show(" Book "+title.isbn+" --- "+title.title+" has been deleted", {cssClass: 'alert-danger', timeout: 4000
    });
    const id={
      "id":title._id
    }
    this.bookdata.deleteBook(id).subscribe(data => {
      if(data.success){
       console.log("success");
      }else{
        console.log("fail");
      }
    })
     }

  ngOnInit() {
  }

}
