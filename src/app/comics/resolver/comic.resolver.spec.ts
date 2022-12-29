import { TestBed } from '@angular/core/testing';

import { ComicResolver } from './comic.resolver';

describe('ComicResolver', () => {
  let resolver: ComicResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ComicResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
