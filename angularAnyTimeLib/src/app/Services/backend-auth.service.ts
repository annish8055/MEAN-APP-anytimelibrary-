import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable({
  providedIn: 'root'
})
export class BackendAuthService {
  authToken:any;
  user:any;

  constructor(private http:Http) { }

  registerUser(user){
     let headers = new Headers();
     headers.append('Content-Type','application/json');
     return this.http.post('http://localhost:3000/users/register',user,{headers: headers})
     .pipe(map(res => res.json()));
  }

  authenticateUsers(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate',user,{headers: headers})
    .pipe(map(res => res.json()));
  }

  getProfile(){
    let headers = new Headers();
    this.loadToekn();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/profile',{headers: headers})
    .pipe(map(res => res.json()));
  }

  loadToekn(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

 loggedIn(){
   return tokenNotExpired('id_token');
 }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  getUserData(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/allusers',{headers: headers})
    .pipe(map(res => res.json()));
  }

}