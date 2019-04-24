import { TestBed } from '@angular/core/testing';

import { ComunicatorService } from './comunicator.service';

describe('ComunicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComunicatorService = TestBed.get(ComunicatorService);
    expect(service).toBeTruthy();
  });
});
