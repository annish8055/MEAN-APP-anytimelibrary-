import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService }  from '../../Services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BackendAuthService } from '../../Services/backend-auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router,
    private validate:AuthService,
    private flashMessage: FlashMessagesService,
    private authservice:BackendAuthService) { }

ngOnInit() {
}

onSignin(form: NgForm){
  const user ={
    email:form.value.email,
    password:form.value.password
 }
 if(!this.validate.LoginvalidateRegister(user)){
  this.flashMessage.show(" ------  PLEASE FILL IN ALL THE FIELDS", {cssClass: 'alert-danger', timeout: 4000
  });

  return false;
}
if(!this.validate.validateEmail(user.email)){
  this.flashMessage.show(" ------  PLEASE ENTER A VALID EMAIL ID/USER NAME", {cssClass: 'alert-danger', timeout: 4000
});

return false;
}

//this.router.navigate(['user'])
this.authservice.authenticateUsers(user).subscribe(data => {
  console.log(data)
 if(data.success){
    this.authservice.storeUserData(data.token, data.user);
    this.flashMessage.show(" Login SUCCESSFULLY", {cssClass: 'alert-success', timeout: 2000
  });
  if(data.user.role=='admin'){
    this.router.navigate(['admin']);
  }else{
    this.router.navigate(['user']);
  }
    

 }else{
  this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 4000
});
this.router.navigate(['signin']);
 }
})
}

}