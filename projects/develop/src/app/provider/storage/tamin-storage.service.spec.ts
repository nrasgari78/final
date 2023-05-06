import { TestBed } from '@angular/core/testing';

import { TaminStorageService } from './tamin-storage.service';

describe('TaminStorageService', () => {
  let service: TaminStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaminStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
