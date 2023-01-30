import { TestBed } from '@angular/core/testing';

import { GetHomeDataResolver } from './get-home-data.resolver';

describe('GetHomeDataResolver', () => {
  let resolver: GetHomeDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetHomeDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
