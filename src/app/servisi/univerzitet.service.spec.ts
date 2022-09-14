import { TestBed } from '@angular/core/testing';

import { FakutletService } from './fakultet.service';
import { UniverzitetService } from './univerzitet.service';

describe('UniverzitetService', () => {
  let service: UniverzitetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniverzitetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});