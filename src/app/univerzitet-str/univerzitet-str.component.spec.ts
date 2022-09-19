import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverzitetStrComponent } from './univerzitet-str.component';

describe('UniverzitetStrComponent', () => {
  let component: UniverzitetStrComponent;
  let fixture: ComponentFixture<UniverzitetStrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniverzitetStrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniverzitetStrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
