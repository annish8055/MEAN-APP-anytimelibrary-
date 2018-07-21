import { Component, OnInit } from '@angular/core';
import { BackendAuthService } from '../../Services/backend-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
user:Object;
  constructor(private authservice:BackendAuthService,
              private router:Router              
             ) { }

  ngOnInit() {
    this.authservice.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
     err => {
       console.log(err);
       return false;
     })
    
  }

}
