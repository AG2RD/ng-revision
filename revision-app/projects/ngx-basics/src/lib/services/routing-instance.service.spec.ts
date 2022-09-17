import { TestBed } from '@angular/core/testing';

import { RoutingInstanceService } from './routing-instance.service';

describe('RoutingInstanceService', () => {
  let service: RoutingInstanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingInstanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
