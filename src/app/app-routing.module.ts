import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPollComponent } from './components/add-poll/add-poll.component';
import { PollsComponent } from './components/polls/polls.component';
import { VoteComponent } from './components/vote/vote.component';
import { PollListComponent } from './components/poll-list/poll-list.component';


const routes: Routes = [
  {
    path: '',
    component: AddPollComponent
  },
  {
    path: 'poll-list',
    component: PollListComponent
  },
  {
    path: 'polls/:id',
    component: PollsComponent
  },
  {
    path: 'vote',
    component: VoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
