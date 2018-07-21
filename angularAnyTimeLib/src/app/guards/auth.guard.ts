import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {BackendAuthService} from '../Services/backend-auth.service';

@Injectable()

export class AuthGuard implements CanActivate{
    constructor(private authService:BackendAuthService,
                private router:Router){}


    canActivate(){
      if(this.authService.loggedIn()){
         // console.log("is logged in")
          return true;
      }else{
        //console.log("is not logged in")
          this.router.navigate(['signin']);
      }
    }
}