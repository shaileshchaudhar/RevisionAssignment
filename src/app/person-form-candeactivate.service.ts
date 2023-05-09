import { Component, Injectable } from '@angular/core';
import { PersonComponent } from './person/person.component';
import {  CanDeactivate } from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class PersoncandeactiveService implements
  CanDeactivate<PersonComponent>{
    canDeactivate(component: PersonComponent):boolean {
      if (component.PersonForm.touched) {
        return confirm('Are you sure you want to discard your changes?.')
      }
      else
        return true;
    }
}


