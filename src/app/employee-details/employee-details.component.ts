import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
 
  employee:any;

  constructor(private employeeService: EmployeeService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    console.log("details called");
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.employeeService.getEmployee(id).subscribe(
      data=>this.employee=data
    );
  }

  public backtoEmpList(){
    this.router.navigate(['employees']);
  }
}
