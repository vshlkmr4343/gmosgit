import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { GigSearchComponent } from './gig-search/gig-search.component';
@Component({
  selector: 'app-gigs',
  templateUrl: './gigs.page.html',
  styleUrls: ['./gigs.page.scss'],
})
export class GigsPage implements OnInit {
  isHighlited:any;
  constructor(
    private modalController:ModalController,
    private router:Router) { }

  ngOnInit() {
    this.isHighlited='Crew Gigs'
    console.log('Gigs called')
  }

  gigsDetail(){
   this.router.navigateByUrl('/gigs/detail')
  }

  highlight(item){
    this.isHighlited =item;
  }

  // search(){

  // }

  async search(){
    const modal = await this.modalController.create({
      component: GigSearchComponent
    });
    return await modal.present();
  }

}
