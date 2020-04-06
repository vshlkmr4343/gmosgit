import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarComponentOptions } from 'ion2-calendar';
import { ModalController } from '@ionic/angular';
import { CalendarModelComponent } from '../calendar-model/calendar-model.component';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
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

constructor(private router:Router,private  modal:ModalController) { }
ngOnInit() {}
post(){
  this.router.navigateByUrl('/user/dashboard')
}

async calendar(){
  const modal = await this.modal.create({
    component: CalendarModelComponent,
    cssClass: 'modalCss'
  });
  return await modal.present();
}
}
