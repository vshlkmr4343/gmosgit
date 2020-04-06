import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyGigsFilterComponent } from '../my-gigs-filter/my-gigs-filter.component';

@Component({
  selector: 'app-my-gigs',
  templateUrl: './my-gigs.component.html',
  styleUrls: ['./my-gigs.component.scss'],
})
export class MyGigsComponent implements OnInit {

  constructor(public modal:ModalController) { }

  ngOnInit() {}
  
  async filter(){
    const modal = await this.modal.create({
      component: MyGigsFilterComponent
    });
    return await modal.present();
  }
}
