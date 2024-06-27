import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currEmployee: Employee | null

  constructor(public http: HttpClient) {
    this.currEmployee = null
  }

  signIn(employee: Employee) {
    return this.http.post<Employee>('http://localhost:9000/signin', employee)
  }

  signOut() {
    this.currEmployee = null
  }

}
