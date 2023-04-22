import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesPagComponent } from './favorites-pag.component';

describe('FavoritesPagComponent', () => {
  let component: FavoritesPagComponent;
  let fixture: ComponentFixture<FavoritesPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesPagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritesPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
