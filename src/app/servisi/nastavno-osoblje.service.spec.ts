import { TestBed } from '@angular/core/testing';

import { NastavnoOsobljeService } from './nastavno-osoblje.service';

describe('NastavnoOsobljeService', () => {
  let service: NastavnoOsobljeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NastavnoOsobljeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
