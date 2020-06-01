import { TestBed } from '@angular/core/testing';

import { QuickPollService } from './quick-poll.service';

describe('QuickPollService', () => {
  let service: QuickPollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuickPollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
