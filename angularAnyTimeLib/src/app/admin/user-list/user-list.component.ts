import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendAuthService } from '../../Services/backend-auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  UsersList;
  constructor(private authservice:BackendAuthService,
    private router: Router) {  
      authservice.getUserData().subscribe(data => {
    console.log(data);
    if(data.success){
       this.UsersList=data.msg;
    }else{
     this.router.navigate(['not-found']);
    }
}     
); }

  ngOnInit() {
  }

}
