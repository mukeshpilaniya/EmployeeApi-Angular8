import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  
  employees:Employee=new Employee();
  constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployee(id).subscribe(
      (data:Employee)=>this.employees=data
    );
  }

  public onSubmit(){
    console.log(this.employees);
    this.employeeService.addEmployee(this.employees).subscribe();
    this.router.navigate(['/employees'])
  }
}
