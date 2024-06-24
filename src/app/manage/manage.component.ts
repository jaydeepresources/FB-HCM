import { Component, OnInit } from '@angular/core';
import { CrudEmployeeService } from '../services/crud-employee.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {

  constructor(public crudEmployeeService: CrudEmployeeService) {

  }

  ngOnInit() {
    this.crudEmployeeService.getEmployees()
  }

}
