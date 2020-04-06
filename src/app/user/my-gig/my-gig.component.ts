import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyGigsFilterComponent } from '../my-gigs-filter/my-gigs-filter.component';

@Component({
  selector: 'app-my-gig',
  templateUrl: './my-gig.component.html',
  styleUrls: ['./my-gig.component.scss'],
})
export class MyGigComponent implements OnInit {

  constructor(private modal : ModalController) { }

  ngOnInit() {}
  async filter(){
    const modal = await this.modal.create({
      component: MyGigsFilterComponent
    });
    return await modal.present();
  }
}
