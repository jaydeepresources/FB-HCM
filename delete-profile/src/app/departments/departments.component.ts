import { Component } from '@angular/core';
import { CrudDepartmentService } from '../services/crud-department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {

  constructor(public crudDepartmentService: CrudDepartmentService) {

  }

  ngOnInit() {
    this.crudDepartmentService.getDepartments()
  }
}
