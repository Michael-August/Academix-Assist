import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DottedLoaderComponent } from './dotted-loader.component';

describe('DottedLoaderComponent', () => {
  let component: DottedLoaderComponent;
  let fixture: ComponentFixture<DottedLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DottedLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DottedLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
