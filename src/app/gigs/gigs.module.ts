import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GigsPageRoutingModule } from './gigs-routing.module';

import { GigsDetailComponent } from './gigs-detail/gigs-detail.component';
import { PostComponent } from './post/post.component';
import { SharedModule } from '../shared/shared.module';
import { AddaroleComponent } from './addarole/addarole.component';
import { GigSearchComponent } from './gig-search/gig-search.component';
import { CalendarModelComponent } from './calendar-model/calendar-model.component';
import { GigsPage } from './gigs.page';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    SharedModule,
    GigsPageRoutingModule
  ],
  entryComponents: [GigSearchComponent,CalendarModelComponent],
  declarations: [CalendarModelComponent,GigsDetailComponent,PostComponent,GigsPage,AddaroleComponent,GigSearchComponent]
})
export class GigsPageModule {}
