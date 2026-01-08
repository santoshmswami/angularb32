import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-react-adv-multple',
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './react-adv-multple.html',
  styleUrl: './react-adv-multple.css',
})
export class ReactAdvMultple {


  employeeForm: FormGroup = new FormGroup({});

  constructor() {
    this.initializeForm();
    this.employeeForm.events.subscribe(formEvent=>{
      debugger;
    })
  }

  initializeForm() {
    this.employeeForm =  new FormGroup({
      empId: new FormControl(0),
      empName: new FormControl(""),
      city:new FormControl(""),
      state: new FormControl(""),
      familyList: new FormArray([])
    })
    this.addFamilyForm(); 
  }

  addFamilyForm() {
    const familyForm =  new FormGroup({
      relativeName: new FormControl(""),
      age: new FormControl(""),
      relation: new FormControl("")
    });

    const familyData = this.employeeForm.controls['familyList'] as FormArray;
    familyData.push(familyForm) 
  }

  get empFamilyList() {
    return this.employeeForm.controls['familyList'] as FormArray;
  }

  onSaveEmp() {
    const formValue = this.employeeForm.value;
    debugger;
  }


}
