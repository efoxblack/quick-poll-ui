import { Component, OnInit } from '@angular/core';
import { QuickPollService } from '../../services/quick-poll.service';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit {

  public polls;

  constructor(private quickPollService: QuickPollService) { }

  ngOnInit(): void {
    this.getPolls();
  }

  getPolls() {
    this.quickPollService.getPolls().subscribe(
      data => {
        this.polls = data;
      },
      err => console.log(err),
      () => console.log('polls loaded')
    );
  }

}
