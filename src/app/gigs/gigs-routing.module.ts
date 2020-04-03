import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GigsPage } from './gigs.page';
import { GigsDetailComponent } from './gigs-detail/gigs-detail.component';
import { PostComponent } from './post/post.component';
import { AddaroleComponent } from './addarole/addarole.component';

const routes: Routes = [
  {
    path: '',
    component: GigsPage
  },
  {
    path: 'detail',
    component: GigsDetailComponent
  },
  {
    path: 'post',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
 // declarations: [GigsDetailComponent,PostComponent,GigsPage]
})
export class GigsPageRoutingModule {}
