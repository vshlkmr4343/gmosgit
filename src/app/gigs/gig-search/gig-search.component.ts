import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-gig-search',
  templateUrl: './gig-search.component.html',
  styleUrls: ['./gig-search.component.scss'],
})
export class GigSearchComponent implements OnInit {

  constructor(private modal:ModalController) { }

  ngOnInit() {}
  async close() {
    return await this.modal.dismiss();
  }
}
