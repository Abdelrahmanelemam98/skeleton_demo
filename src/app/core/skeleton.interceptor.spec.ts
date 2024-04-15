import { TestBed } from '@angular/core/testing';

import { SkeletonInterceptor } from './skeleton.interceptor';

describe('SkeletonInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SkeletonInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SkeletonInterceptor = TestBed.inject(SkeletonInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
