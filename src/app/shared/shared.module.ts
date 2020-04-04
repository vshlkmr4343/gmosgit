import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { Camera} from '@ionic-native/camera/ngx';
import { CalendarModule } from "ion2-calendar";
import { UtilityService } from '../utilities/utility.service';
import { BackHeaderComponent } from './back-header/back-header.component';


@NgModule({
  declarations: [HeaderComponent,BackHeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    CalendarModule
  ],
  exports:[HeaderComponent,CalendarModule,BackHeaderComponent],
  providers:[Camera]
})
export class SharedModule { }
