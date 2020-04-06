import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-my-gigs-filter',
  templateUrl: './my-gigs-filter.component.html',
  styleUrls: ['./my-gigs-filter.component.scss'],
})
export class MyGigsFilterComponent implements OnInit {
  constructor(private modalController:ModalController) { }
  ngOnInit() {}
  async close() {
    return await this.modalController.dismiss();
  }
}
