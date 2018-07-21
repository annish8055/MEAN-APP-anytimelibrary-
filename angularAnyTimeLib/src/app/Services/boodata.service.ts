import { Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class bookList{
constructor(private http:Http,
            private router: Router){}

  getBookData(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/books/booklist',{headers: headers})
    .pipe(map(res => res.json()));
  }

  deleteBook(id){
    console.log(id);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/books/deleteBook',id,{headers: headers})
    .pipe(map(res => res.json()));
  }

}