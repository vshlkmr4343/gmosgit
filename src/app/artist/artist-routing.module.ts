import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistPage } from './artist.page';
import { ArtistProfileComponent } from './artist-profile/artist-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistPage
  },
  {
    path: 'profile',
    component: ArtistProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistPageRoutingModule {}
