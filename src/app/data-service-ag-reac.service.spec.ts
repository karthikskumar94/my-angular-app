import { TestBed } from '@angular/core/testing';

import { DataServiceAgReacService } from './data-service-ag-reac.service';

describe('DataServiceAgReacService', () => {
  let service: DataServiceAgReacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServiceAgReacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
