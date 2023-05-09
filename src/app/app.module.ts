import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonComponent } from './person/person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PersoncandeactiveService } from './person-form-candeactivate.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EmployeeComponent } from './employee/employee.component';
import {MatButtonModule} from '@angular/material/button'
import {MatRadioModule} from '@angular/material/radio';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { employeeListDataService } from './Services/employeelist-data.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';





@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    NavbarComponent,
    ProductListComponent,
    EmployeeComponent,
    EmployeelistComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
   MatNativeDateModule,
   MatButtonModule,
   MatRadioModule,
  //  HttpClientInMemoryWebApiModule.forRoot(employeeListDataService),
   HttpClientModule,
   MatTableModule
   


     



  ],
  providers: [PersoncandeactiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
