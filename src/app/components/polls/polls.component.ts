import { Component, OnInit } from '@angular/core';
import { QuickPollService } from '../../services/quick-poll.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {

  public pollSub;

  constructor(private quickPollService: QuickPollService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPollSubmission(this.route.snapshot.params.id)
  }

  getPollSubmission(id: number) {
    this.quickPollService.getPoll(id).subscribe(
      data => {
        this.pollSub = data;
      },
      err => console.log(err),
      () => console.log('polls loaded')
    );
  }

}
