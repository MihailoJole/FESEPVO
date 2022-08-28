import { TestBed } from '@angular/core/testing';

import { AngazovanjaService } from './angazovanja.service';

describe('AngazovanjaService', () => {
  let service: AngazovanjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngazovanjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
