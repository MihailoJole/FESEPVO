import { TestBed } from '@angular/core/testing';


import { ModulServis } from './modul.service';

describe('ModulServis', () => {
  let service: ModulServis;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModulServis);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});