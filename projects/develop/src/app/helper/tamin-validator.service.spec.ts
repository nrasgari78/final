import { TestBed } from '@angular/core/testing';

import { TaminValidatorService } from './tamin-validator.service';

describe('TaminValidatorService', () => {
  let service: TaminValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaminValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
