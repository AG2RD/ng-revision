import { TestBed } from '@angular/core/testing';

import { ModuleInstanceService } from './module-instance.service';

describe('ModuleInstanceService', () => {
  let service: ModuleInstanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleInstanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
