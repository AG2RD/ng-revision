import { TestBed } from '@angular/core/testing';

import { NgxBasicsService } from './ngx-basics.service';

describe('NgxBasicsService', () => {
  let service: NgxBasicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBasicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
