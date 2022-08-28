import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngazovanjeFormComponent } from './angazovanje-form.component';

describe('AngazovanjeFormComponent', () => {
  let component: AngazovanjeFormComponent;
  let fixture: ComponentFixture<AngazovanjeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngazovanjeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngazovanjeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
