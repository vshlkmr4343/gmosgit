import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-back-header',
  templateUrl: './back-header.component.html',
  styleUrls: ['./back-header.component.scss'],
})
export class BackHeaderComponent implements OnInit {
  constructor(private location:Location) { }
  ngOnInit() {}
  back(){
    this.location.back();
  }
}
