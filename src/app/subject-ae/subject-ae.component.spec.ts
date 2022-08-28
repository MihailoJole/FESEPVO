import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAEComponent } from './subject-ae.component';

describe('SubjectAEComponent', () => {
  let component: SubjectAEComponent;
  let fixture: ComponentFixture<SubjectAEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectAEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
