import { TestBed } from '@angular/core/testing';

import { FakutletService } from './fakultet.service';

describe('FakultetService', () => {
  let service: FakutletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakutletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});