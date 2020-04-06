import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gigs-detail',
  templateUrl: './gigs-detail.component.html',
  styleUrls: ['./gigs-detail.component.scss'],
})
export class GigsDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('GigsDetailComponent')
  }

}
