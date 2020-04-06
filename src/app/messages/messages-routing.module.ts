import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagesPage } from './messages.page';
import { ChatBoardComponent } from './chat-board/chat-board.component';

const routes: Routes = [
  {
    path: '',
    component: MessagesPage
  },
  {
    path: 'chat-board',
    component: ChatBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesPageRoutingModule {}
