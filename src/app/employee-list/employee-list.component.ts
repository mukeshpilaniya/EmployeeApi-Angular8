import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:any;

  constructor(private employeeService: EmployeeService, private router:Router){
  }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  public getAllEmployee():any{
    return this.employeeService.getAllEmployee().subscribe(
      data=>this.employees=data
    );
  }

  public deleteEmployee(id:number){
    return this.employeeService.deleteEmployee(id).subscribe(
      data=>this.employees=data
    );
    //console.log(id);
  }
  
  public employeeDetails(id:number){
    //console.log(id);
    this.router.navigate(['/details',id]);
  }
}
