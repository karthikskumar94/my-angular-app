import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridEditableComponent } from './ag-grid-editable.component';

describe('AgGridEditableComponent', () => {
  let component: AgGridEditableComponent;
  let fixture: ComponentFixture<AgGridEditableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgGridEditableComponent]
    });
    fixture = TestBed.createComponent(AgGridEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
