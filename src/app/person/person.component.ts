import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  PersonForm!:FormGroup;

  constructor(private _fb:FormBuilder) { }
  @ViewChild('PersonForm') createUserForm!:NgForm;
 

  ngOnInit(): void {
    this.PersonForm=this._fb.group({
      Firstname: ['',Validators.required],
      Middlename: ['',Validators.required],
      LastName: ['',Validators.required],
      Dep: ['',Validators.required],
      Gen: ['',Validators.required],
      DOB: ['',Validators.required],
      Address1: ['',Validators.required],
      Pincode: [null,[Validators.minLength(1),Validators.maxLength(6),Validators.required]],
    })
  }
  SavePerson(form:any){
    console.log(form.value)
  }

}
