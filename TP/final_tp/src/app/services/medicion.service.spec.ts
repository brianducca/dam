import { TestBed } from '@angular/core/testing';

import { MedicionService } from './medicion.service';

describe('MedicionService', () => {
  let service: MedicionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
