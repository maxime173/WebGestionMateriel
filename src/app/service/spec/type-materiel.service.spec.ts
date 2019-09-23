import { TestBed } from '@angular/core/testing';

import { TypeMaterielService } from '../type-materiel.service';

describe('TypeMaterielService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeMaterielService = TestBed.get(TypeMaterielService);
    expect(service).toBeTruthy();
  });
});
