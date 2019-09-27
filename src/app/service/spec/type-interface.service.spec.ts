import { TestBed } from '@angular/core/testing';

import { TypeInterfaceService } from '../type-interface.service';

describe('TypeInterfaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeInterfaceService = TestBed.get(TypeInterfaceService);
    expect(service).toBeTruthy();
  });
});
