import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridGroupedComponent } from './ag-grid-grouped.component';

describe('AgGridGroupedComponent', () => {
  let component: AgGridGroupedComponent;
  let fixture: ComponentFixture<AgGridGroupedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgGridGroupedComponent]
    });
    fixture = TestBed.createComponent(AgGridGroupedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
