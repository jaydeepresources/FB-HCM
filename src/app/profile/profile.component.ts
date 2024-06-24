import { Component } from '@angular/core';
import { Employee } from '../model/employee';
import { AuthService } from '../services/auth.service';
import { CrudEmployeeService } from '../services/crud-employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  employeeProfile: Employee
  successFlag: boolean
  errorFlag: boolean

  constructor(public auth: AuthService, public crudEmployeeService: CrudEmployeeService) {
    this.employeeProfile = new Employee()
    this.successFlag = false
    this.errorFlag = false
  }

  ngOnInit() {
    Object.assign(this.employeeProfile, this.auth.currEmployee)
  }

  profileSubmit(profileForm: any) {
    this.successFlag = false
    this.errorFlag = false

    this.employeeProfile.department.departmentId = 4

    this.crudEmployeeService.saveProfile(this.employeeProfile).subscribe(res => {
      if (this.employeeProfile.employeeId !== res.employeeId)
        this.errorFlag = true

      else {
        this.successFlag = true
        profileForm.form.markAsPristine()
      }
    })

  }


}