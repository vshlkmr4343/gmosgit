import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FavoritesFilterComponent } from '../favorites-filter/favorites-filter.component';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
})
export class FavouriteComponent implements OnInit {

  constructor(private modal:ModalController) { }

  ngOnInit() {}
  async filter(){
    const modal = await this.modal.create({
      component: FavoritesFilterComponent
    });
    return await modal.present();
  }
}
