import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPagComponent } from './history-pag.component';

describe('HistoryPagComponent', () => {
  let component: HistoryPagComponent;
  let fixture: ComponentFixture<HistoryPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryPagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
