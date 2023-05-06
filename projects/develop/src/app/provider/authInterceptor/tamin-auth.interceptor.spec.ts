import { TestBed } from '@angular/core/testing';

import { TaminAuthInterceptor } from './tamin-auth.interceptor';

describe('TaminAuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TaminAuthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TaminAuthInterceptor = TestBed.inject(TaminAuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
