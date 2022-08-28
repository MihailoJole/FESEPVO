import { TestBed } from '@angular/core/testing';

import { OblikNastaveService } from './oblik-nastave.service';

describe('OblikNastaveService', () => {
  let service: OblikNastaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OblikNastaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
