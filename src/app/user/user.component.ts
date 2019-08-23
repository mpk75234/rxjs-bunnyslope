import { Component, OnInit } from '@angular/core';

import { noop, Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[];


  constructor() { }

  ngOnInit() {
    const users$ = Observable.create(obs => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        //JSON.stringify response object and return it for futher use
        return response.json();
      })
      .then(body => {
        obs.next(body);
        obs.complete();
      })
      .catch(err => console.log(err))
    })
    users$.subscribe(
      fetchedUsers =>  this.users = fetchedUsers,
      noop,
      () => console.log('completed')
    );
    this.logUsers();
  }
logUsers(){
  console.log(this.users);
}
}
