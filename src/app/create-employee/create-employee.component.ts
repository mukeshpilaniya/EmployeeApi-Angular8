import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee} from '../employee'
Router

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  submitted=false;
  model:Employee=new Employee();

  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted=true;
    this.employeeService.addEmployee(this.model).subscribe(
      data=>console.log(data),
      error=>console.log(error)
    );

  }

  public addMore(){
    this.submitted=true;
    this.router.navigate['/add'];
  }
}
