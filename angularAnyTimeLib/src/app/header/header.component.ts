import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BackendAuthService } from '../Services/backend-auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() searchItem = new EventEmitter<string>();
bookSearched;
filterBook;
  collapse = true;
 
  toggleCollapse(): void {
    this.collapse = !this.collapse;
  }
 
  constructor(private router: Router,
    private flashMessage: FlashMessagesService,
    private authservice:BackendAuthService) { }

  ngOnInit() {
  }

  onLogout(){
this.authservice.logout();
    this.flashMessage.show("Logout Successful", {cssClass: 'alert-success', timeout: 4000
});
this.router.navigate(['signin']);
  }

  onSearch(event){
    this.bookSearched=(<HTMLInputElement>event.target).value;
    console.log(this.bookSearched);
   }

  searchClick(filterBook){
    console.log("this was searched-",filterBook);
    this.bookSearched=filterBook;
    this.searchItem.emit(this.bookSearched);
    //this.router.navigate(['/user/profile']);
  }
}
