import { Component, OnInit } from '@angular/core';
// import { employeeListDataService } from '../Services/employeelist-data.service';
import { EmployeelistService } from '../Services/employeelist.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
  providers:[EmployeelistService]
})
export class EmployeelistComponent implements OnInit {
  employeeList1:any[]=[]

  constructor(private _employeeList:EmployeelistService) { }

  ngOnInit(): void {
    // this._employeeList.getemployeeListByApi().subscribe((employeeListdata: employeeListDataService)=>{
    //   this._employeeList=employeeListdata;
    this.employeeList1=this._employeeList.getdata()
    console.log(this.employeeList1)
    }
    displayedColumns: string[] = ['SrNo','FullName','EmailId','ContactNumber','DOB','Address']
  }

