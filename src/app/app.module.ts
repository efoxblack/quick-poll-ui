import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollsComponent } from './components/polls/polls.component';
import { AddPollComponent } from './components/add-poll/add-poll.component';
import { VoteComponent } from './components/vote/vote.component';
import { PollListComponent } from './components/poll-list/poll-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PollsComponent,
    AddPollComponent,
    VoteComponent,
    PollListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
