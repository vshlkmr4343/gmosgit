import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ArtistSearchComponent} from './artist-search/artist-search.component'
@Component({
  selector: 'app-artist',
  templateUrl: './artist.page.html',
  styleUrls: ['./artist.page.scss'],
})
export class ArtistPage implements OnInit {
  isHighlited:any;
  constructor(
    private router:Router,
    private modalController:ModalController) { }
  ngOnInit() {
    this.isHighlited ='Actors'
  }
  profile(){
    this.router.navigateByUrl('/artist/profile')
  }

  highlight(item){
    console.log(item);
    this.isHighlited =item;
  }

 async filter(){
    const modal = await this.modalController.create({
      component: ArtistSearchComponent
    });
    return await modal.present();
  }
}
