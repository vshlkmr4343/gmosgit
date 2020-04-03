import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.scss'],
})
export class ArtistSearchComponent implements OnInit {
  
  constructor(public modalController: ModalController) { }
  ngOnInit() {}
  // close(){
  //  this.modalController.dismiss()
  // }

  async close() {
    // const modal = await this.modalController.create({
    //   component: ModalPage
    // });
    return await this.modalController.dismiss();
  }
}
