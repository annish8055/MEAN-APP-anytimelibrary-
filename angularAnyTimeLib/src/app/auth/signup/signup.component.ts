import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService }  from '../../Services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BackendAuthService } from '../../Services/backend-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router,
              private validate:AuthService,
              private flashMessage: FlashMessagesService,
              private authservice: BackendAuthService) { }

ngOnInit() {
}

onSignup(form: NgForm){
  const user ={
     name:form.value.fullname,
     email:form.value.email,
     password:form.value.password
  }
const name=form.value.fullname;
const email=form.value.email;
const password = form.value.password;
console.log(name,email,password);

//required field
if(!this.validate.validateRegister(user)){
  this.flashMessage.show(" ------  PLEASE FILL IN ALL THE FIELDS", {cssClass: 'alert-danger', timeout: 4000
  });

  return false;
}
if(!this.validate.validateEmail(user.email)){
  this.flashMessage.show(" ------  PLEASE ENTER A VALID EMAIL ID", {cssClass: 'alert-danger', timeout: 4000
});

return false;
}

//this.router.navigate(['user'])
 this.authservice.registerUser(user).subscribe(data => {
   if(data.success){
    this.flashMessage.show(" REGISTERED SUCCESSFULLY --- Now Please LOGIN with your new account", {cssClass: 'alert-success', timeout: 2000
  });
    this.router.navigate(['signin'])
   }else{
    this.flashMessage.show(" ------ SOMETHING WENT WRONG TRY AGAIN", {cssClass: 'alert-danger', timeout: 4000
  });
   }
 })
}

  
}
