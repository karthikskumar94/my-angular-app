import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormServiceComponent } from './reactive-form-service.component';

describe('ReactiveFormServiceComponent', () => {
  let component: ReactiveFormServiceComponent;
  let fixture: ComponentFixture<ReactiveFormServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormServiceComponent]
    });
    fixture = TestBed.createComponent(ReactiveFormServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
