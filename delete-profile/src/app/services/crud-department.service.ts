import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../model/department';

@Injectable({
  providedIn: 'root'
})
export class CrudDepartmentService {

  departments: Department[]

  constructor(public http: HttpClient) {
    this.departments = []
  }

  getDepartments() {
    this.http.get<Department[]>('http://localhost:9000/department/').subscribe(res => {
      console.log(this.departments)
      this.departments = res
    })
  }
}
