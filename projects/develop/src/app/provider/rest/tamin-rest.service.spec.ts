import { TestBed } from '@angular/core/testing';

import { TaminRestService } from './tamin-rest.service';

describe('TaminRestService', () => {
  let service: TaminRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaminRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
