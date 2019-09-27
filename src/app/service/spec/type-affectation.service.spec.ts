import { TestBed } from '@angular/core/testing';

import { TypeAffectationService } from '../type-affectation.service';

describe('TypeAffectationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeAffectationService = TestBed.get(TypeAffectationService);
    expect(service).toBeTruthy();
  });
});
