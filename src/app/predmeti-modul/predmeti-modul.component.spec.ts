import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetiModulComponent } from './predmeti-modul.component';

describe('PredmetiModulComponent', () => {
  let component: PredmetiModulComponent;
  let fixture: ComponentFixture<PredmetiModulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredmetiModulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetiModulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
