import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserPageRoutingModule } from './user-routing.module';
import { UserPage } from './user.page';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { SharedModule } from '../shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FavoritesFilterComponent } from './favorites-filter/favorites-filter.component';
import { MyGigsFilterComponent } from './my-gigs-filter/my-gigs-filter.component';
import { MyGigComponent } from './my-gig/my-gig.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    UserPageRoutingModule
  ],
  declarations: [
    MyGigComponent,
    MyGigsFilterComponent,
    ChangePasswordComponent,
    UserPage,
    ProfileComponent,
    DashboardComponent,
    EditProfileComponent,
    FavouriteComponent,
    ForgotPasswordComponent,
    FavoritesFilterComponent
  ],
entryComponents: [FavoritesFilterComponent,MyGigsFilterComponent]
})
export class UserPageModule {}
