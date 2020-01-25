import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandmarkItemComponent } from './landmark-item.component';

describe('LandmarkComponent', () => {
  let component: LandmarkItemComponent;
  let fixture: ComponentFixture<LandmarkItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandmarkItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandmarkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
