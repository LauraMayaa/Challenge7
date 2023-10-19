import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppKitchenComponent } from './app-kitchen.component';

describe('AppKitchenComponent', () => {
  let component: AppKitchenComponent;
  let fixture: ComponentFixture<AppKitchenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppKitchenComponent]
    });
    fixture = TestBed.createComponent(AppKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
