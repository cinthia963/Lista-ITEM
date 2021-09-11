import { TestBed } from '@angular/core/testing';

import { ServtaskService } from './servtask.service';

describe('ServtaskService', () => {
  let service: ServtaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServtaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
