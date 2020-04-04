import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-calendar-model',
  templateUrl: './calendar-model.component.html',
  styleUrls: ['./calendar-model.component.scss'],
})
export class CalendarModelComponent implements OnInit {
  dateMulti: string[];
  type: 'string';
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };
  timezonesArray = [
    { value: 'Atlantic Standard Time'},
    { value: 'Eastern Standard Time'},
    { value: 'Central Standard Time'},
    { value: 'Mountain Standard Time'},
    { value: 'Pacific Standard Time'},
    { value: 'Alaskan Standard Time'},
    { value: 'Hawaii-Aleutian Standard Time' },
  ];
  constructor(private modal:ModalController) { }
  ngOnInit() {}
  async close() {
    return await this.modal.dismiss();
  }
}
