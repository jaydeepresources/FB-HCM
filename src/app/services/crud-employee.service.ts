import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class CrudEmployeeService {

  employees: Employee[]

  constructor(public http: HttpClient) {
    this.employees = []
  }

  getEmployees() {
    this.http.get<Employee[]>("http://localhost:9000/employee").subscribe(res => {
      this.employees = res
    })
  }

  saveProfile(employee: Employee) {
    return this.http.post<Employee>("http://localhost:9000/employee", employee)
  }

}