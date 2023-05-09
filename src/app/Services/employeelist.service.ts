import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeelistService {
  // employeeListURL:string='api/employeeList';

  // constructor(private _http: HttpClient) { }
  private employeeList:any []=[
        
    {SrNo:'1',FullName:'Shailesh Kumar Chaudhary',EmailId:'xyz@gmail.com',ContactNumber:'7413833024',DOB:'1/2/2001',Address:'Rampur'},
    {SrNo:'2',FullName:'Rohit Gupta',EmailId:'xyz@gmail.com',ContactNumber:'1234567890',DOB:'1/2/2001',Address:'Rampur'},
    {SrNo:'3',FullName:'Sugand Srivastava',EmailId:'xyz@gmail.com',ContactNumber:'4567891223',DOB:'1/2/2001',Address:'Rampur'},
    {SrNo:'4',FullName:'Vertika Gupta',EmailId:'xyz@gmail.com',ContactNumber:'5534567889',DOB:'1/2/2001',Address:'Rampur'},

];

  
//   getemployeeListByApi():Observable<any>{
//     return this._http.get<any>(this.employeeListURL);
//   }
getdata(){
  return this.employeeList
}
}
