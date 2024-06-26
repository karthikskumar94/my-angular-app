import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormAgGridParentFormComponent } from './reactive-form-ag-grid-parent-form.component';

describe('ReactiveFormAgGridParentFormComponent', () => {
  let component: ReactiveFormAgGridParentFormComponent;
  let fixture: ComponentFixture<ReactiveFormAgGridParentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormAgGridParentFormComponent]
    });
    fixture = TestBed.createComponent(ReactiveFormAgGridParentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
