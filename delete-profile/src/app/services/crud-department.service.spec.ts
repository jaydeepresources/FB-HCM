import { TestBed } from '@angular/core/testing';

import { CrudDepartmentService } from './crud-department.service';

describe('CrudDepartmentService', () => {
  let service: CrudDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
