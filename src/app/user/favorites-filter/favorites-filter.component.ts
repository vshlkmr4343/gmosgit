import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-favorites-filter',
  templateUrl: './favorites-filter.component.html',
  styleUrls: ['./favorites-filter.component.scss'],
})
export class FavoritesFilterComponent implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {}
  async close() {
    return await this.modalController.dismiss();
  }
}
