import { TestBed } from '@angular/core/testing';

import { TaminSecurityService } from './tamin-security.service';

describe('TaminSecurityService', () => {
  let service: TaminSecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaminSecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
