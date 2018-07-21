import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendAuthService } from '../Services/backend-auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
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
  

}
