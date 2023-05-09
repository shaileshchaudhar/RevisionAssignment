import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { PersoncandeactiveService } from './person-form-candeactivate.service';
import { PersonComponent } from './person/person.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'PersonForm',component:PersonComponent,canDeactivate:[PersoncandeactiveService]},
  { path:'productList',component:ProductListComponent},
  { path:'employee',component:EmployeeComponent},
  { path:'employeeList',component:EmployeelistComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
