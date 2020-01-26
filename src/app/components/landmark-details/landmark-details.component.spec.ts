import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandmarkDetailsComponent } from './landmark-details.component';

describe('LandmarkDetailsComponent', () => {
  let component: LandmarkDetailsComponent;
  let fixture: ComponentFixture<LandmarkDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandmarkDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandmarkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
