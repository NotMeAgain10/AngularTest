import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandmarkCardComponent } from './landmark-card.component';

describe('LandmarkCardComponent', () => {
  let component: LandmarkCardComponent;
  let fixture: ComponentFixture<LandmarkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandmarkCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandmarkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
