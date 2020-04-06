import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistPageRoutingModule } from './artist-routing.module';

import { ArtistPage } from './artist.page';
import { SharedModule } from '../shared/shared.module';
import { ArtistProfileComponent } from './artist-profile/artist-profile.component';
import { ArtistSearchComponent} from './artist-search/artist-search.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    ArtistPageRoutingModule
  ],
  entryComponents:[ArtistSearchComponent],
  declarations: [ArtistPage,ArtistProfileComponent,ArtistSearchComponent]
})
export class ArtistPageModule {}
