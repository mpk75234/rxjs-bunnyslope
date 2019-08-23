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
  }
}
