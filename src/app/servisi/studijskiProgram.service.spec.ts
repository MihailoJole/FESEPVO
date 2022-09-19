import { TestBed } from '@angular/core/testing';


import { StudijskiProgramServis } from './studijskiProgram.service';

describe('StudijskiProgramServis', () => {
  let service: StudijskiProgramServis;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudijskiProgramServis);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});