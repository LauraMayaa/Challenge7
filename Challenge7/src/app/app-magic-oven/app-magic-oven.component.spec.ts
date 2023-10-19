import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMagicOvenComponent } from './app-magic-oven.component';

describe('AppMagicOvenComponent', () => {
  let component: AppMagicOvenComponent;
  let fixture: ComponentFixture<AppMagicOvenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppMagicOvenComponent]
    });
    fixture = TestBed.createComponent(AppMagicOvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
