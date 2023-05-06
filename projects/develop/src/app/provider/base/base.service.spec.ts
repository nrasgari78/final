import { TestBed } from '@angular/core/testing';

import { TaminBaseService } from './base.service';

describe('TaminBaseService', () => {
  let service: TaminBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaminBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
