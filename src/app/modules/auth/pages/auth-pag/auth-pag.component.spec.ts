import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPagComponent } from './auth-pag.component';

describe('AuthPagComponent', () => {
  let component: AuthPagComponent;
  let fixture: ComponentFixture<AuthPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthPagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
