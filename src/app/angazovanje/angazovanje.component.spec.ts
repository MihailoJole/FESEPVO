import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngazovanjeComponent } from './angazovanje.component';

describe('AngazovanjeComponent', () => {
  let component: AngazovanjeComponent;
  let fixture: ComponentFixture<AngazovanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngazovanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngazovanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
