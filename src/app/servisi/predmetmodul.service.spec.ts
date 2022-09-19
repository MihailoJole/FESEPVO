import { TestBed } from '@angular/core/testing';

import { PredmetModulService } from './predmetmodul.service';

describe('PredmetModulService', () => {
  let service: PredmetModulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PredmetModulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});