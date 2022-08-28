import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngazovanjeAEComponent } from './angazovanje-ae.component';

describe('AngazovanjeAEComponent', () => {
  let component: AngazovanjeAEComponent;
  let fixture: ComponentFixture<AngazovanjeAEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngazovanjeAEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngazovanjeAEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
