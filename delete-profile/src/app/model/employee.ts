import { Department } from "./department";

export class Employee {
    employeeId: number;
    employeeName: string;
    employeeSalary: number;
    employeeEmail: string;
    employeePassword: string;

    department: Department

    constructor() {
        this.employeeId = 0
        this.employeeName = ''
        this.employeeSalary = 0
        this.employeeEmail = ''
        this.employeePassword = ''

        this.department = new Department()
    }
}