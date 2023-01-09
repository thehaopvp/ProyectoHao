import { TestBed } from '@angular/core/testing';

import { CapitulosResolver } from './capitulos.resolver';

describe('CapitulosResolver', () => {
  let resolver: CapitulosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CapitulosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
