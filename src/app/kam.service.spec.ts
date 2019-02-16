import { TestBed } from '@angular/core/testing';

import { KamService } from './kam.service';

describe('KamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KamService = TestBed.get(KamService);
    expect(service).toBeTruthy();
  });
});
