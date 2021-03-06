import { Component, OnInit } from '@angular/core';

import {  map } from 'rxjs/operators';
import { of, fromEvent, interval, Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs-bunnyslope';

  ngOnInit(){
    document.addEventListener('click', evh =>{
      console.log("VAN HALEN! " + evh);
    })
    let kount = 79;
    //create observable variable by adding "$"
    let kounter$ = interval(9000);
    //subscribe to kounter$
    const unkounter$ = kounter$.subscribe(evh =>{
      console.log(`${kount} from interval$`)
      kount++;
    })
    //the subscribe() returns an observable we can use to unsubscribe
    setTimeout(()=>{
      unkounter$.unsubscribe();
      console.log("unsubscribed from kounter$")
      console.log("no further events...")
    }, 33000)


  }
}
