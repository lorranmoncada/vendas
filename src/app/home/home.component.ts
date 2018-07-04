import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  show = false;

  constructor() { }


  expandirLogin() {
    this.show = !this.show;

  }



  ngOnInit() {
  }

}
