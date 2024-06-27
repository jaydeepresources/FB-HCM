import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  employee: Employee
  invalidLoginFlag: boolean

  constructor(public auth: AuthService, public router: Router) {
    this.invalidLoginFlag = false
    this.employee = new Employee()
    this.employee.employeeEmail = 'sandeshkhadake143@gmail.com'
    this.employee.employeePassword = 'sandy8080'
  }

  signInSubmit(signInForm: any) {
    this.auth.signIn(this.employee).subscribe(next => {
      if (next == null)
        this.invalidLoginFlag = true
      else {
        this.invalidLoginFlag = false
        this.auth.currEmployee = next
        this.router.navigateByUrl('/manage')
      }
    })
  }
}