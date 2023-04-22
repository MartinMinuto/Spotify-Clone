import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksPagComponent } from './tracks-pag.component';

describe('TracksPagComponent', () => {
  let component: TracksPagComponent;
  let fixture: ComponentFixture<TracksPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TracksPagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracksPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
