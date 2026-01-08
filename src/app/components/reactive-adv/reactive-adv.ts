import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-adv',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-adv.html',
  styleUrl: './reactive-adv.css',
})
export class ReactiveAdv {


  // employeeForm: FormGroup = new FormGroup({
  //   empName: new FormControl(""),
  //   city: new FormControl(""),
  //   state: new FormControl("")
  // });

  employeeForm: FormGroup;

  formBuilder = inject(FormBuilder);

  constructor() {
    this.employeeForm = this.formBuilder.group({
      empName: ['', [Validators.required]],
      city: [''],
      state: [''],
      isAddressMandatory: [false]
    });

    // setTimeout(() => {
    //   this.employeeForm.setValue({
    //     empName:'RRR',
    //     state:'MH'
    //   })
    // }, 3000);

    // setTimeout(() => {
    //   this.employeeForm.patchValue({
    //     empName: 'PPP',
    //     state: 'GOA'
    //   })
    // }, 6000);
    this.employeeForm.controls['isAddressMandatory'].valueChanges.subscribe(flag => {
      debugger;
      if (flag == true) {
        this.employeeForm.controls['city'].addValidators([Validators.required])
        this.employeeForm.controls['state'].addValidators([Validators.required])
        this.employeeForm.controls['city'].enable();
      } else {
        this.employeeForm.controls['city'].removeValidators([Validators.required])
        this.employeeForm.controls['state'].removeValidators([Validators.required])

        this.employeeForm.controls['city'].disable();
      }
      this.employeeForm.updateValueAndValidity();
    })

    this.employeeForm.controls['city'].valueChanges.subscribe(cityName => {
      debugger;
    })
    this.employeeForm.controls['state'].valueChanges.subscribe(state => {
      debugger;
      this.employeeForm.controls['city'].patchValue("");
    })
  }

  onSave() {
    const formValue = this.employeeForm.value;
    debugger;
    //api call
  }



  searchBox: FormControl = new FormControl("abc");


  emploteeoBj = {
    name: '',
    id: '',
    city: '',
    state: '',
    family: [
      { name: '', relation: '', age: '' },
      { name: '', relation: '', age: '' },
      { name: '', relation: '', age: '' }
    ]
  }


}
