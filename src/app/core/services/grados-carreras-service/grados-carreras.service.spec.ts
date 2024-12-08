import { TestBed } from '@angular/core/testing';

import { GradosCarrerasService } from './grados-carreras.service';

describe('GradosCarrerasService', () => {
  let service: GradosCarrerasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradosCarrerasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
