import { TestBed } from '@angular/core/testing';

import { RollservicesService } from './rollservices.service';

describe('RollservicesService', () => {
  let service: RollservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RollservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
