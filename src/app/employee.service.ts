import { Employee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8080/api/v1";

  // fetch all employees
  public getAllEmployee(): Observable<any> {
    return this.http.get(this.baseUrl + "/employees");
  }
  //fetch a employee
  public getEmployee(id: number) {
    return this.http.get(this.baseUrl + "/employees/" + id);
  }
  //delete employee
  public deleteEmployee(id: number): Observable<any> {
    //console.log(id);
    return this.http.delete(this.baseUrl + "/employees/delete/" + id);
  }
  //add employee
  public addEmployee(employee: Employee) {
    return this.http.post(this.baseUrl + "/employees/add", employee);
  }
  //update employee
  public updateEmployee(employee:Employee){
    return this.http.put(this.baseUrl+"/api/v1/employees/update",employee);
  }
} 
