import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumAdPageComponent } from './premium-ad-page.component';

describe('PremiumAdPageComponent', () => {
  let component: PremiumAdPageComponent;
  let fixture: ComponentFixture<PremiumAdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumAdPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumAdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
