import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandmarksListComponent } from './landmarks-list.component';

describe('LandmarksComponent', () => {
  let component: LandmarksListComponent;
  let fixture: ComponentFixture<LandmarksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandmarksListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandmarksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
