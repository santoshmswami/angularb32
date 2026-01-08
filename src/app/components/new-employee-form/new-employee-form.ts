import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-employee-form',
  imports: [ReactiveFormsModule],
  templateUrl: './new-employee-form.html',
  styleUrl: './new-employee-form.css',
})
export class NewEMployeeForm implements OnInit {
  http = inject(HttpClient);
  deptmentList = signal<any[]>([]);
  designationList = signal<any[]>([]);
  commanApiUrl: string = "https://api.freeprojectapi.com/api/EmployeeApp/";

  activateRoute = inject(ActivatedRoute);

  employeeForm: FormGroup = new FormGroup({
    employeeId: new FormControl(0),
    fullName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]),
    gender: new FormControl(""),
    dateOfJoining: new FormControl(""),
    departmentId: new FormControl(""),
    designationId: new FormControl(""),
    employeeType: new FormControl(""),
    salary: new FormControl(0)
  })

  ngOnInit(): void {
    this.activateRoute.params.subscribe({
      next:(res:any)=>{
        debugger;
        if(res.empid != 0) {
          this.editEmployee(res.empid)
        }
        
      }
    })
    this.getDepartment()
  }


  
  editEmployee(id: number) { 
    this.http.get(`${this.commanApiUrl}${id}`).subscribe({
      next: (res: any) => { 
        this.employeeForm = new FormGroup({
          employeeId: new FormControl(res.employeeId),
          fullName: new FormControl(res.fullName),
          email: new FormControl(res.email),
          phone: new FormControl(res.phone),
          gender: new FormControl(res.gender),
          dateOfJoining: new FormControl(res.dateOfJoining),
          departmentId: new FormControl(res.departmentId),
          designationId: new FormControl(res.designationId),
          employeeType: new FormControl(res.employeeType),
          salary: new FormControl(res.salary)
        });

      }
    })
  }

  getDepartment() {
    this.http.get(`${this.commanApiUrl}GetDepartments`).subscribe({
      next: (res: any) => {

        this.deptmentList.set(res)
      }
    })
  }
  getDesignationByDeptId() {

    const deptId = this.employeeForm.controls['departmentId'].value;
    this.http.get(this.commanApiUrl + "GetDesignationsByDeptId?deptId=" + deptId).subscribe({
      next: (res: any) => {
        this.designationList.set(res)
      }
    })
  }


  onSaveEmp() {

    const formValue = this.employeeForm.value;

    this.http.post(this.commanApiUrl + "CreateEmployee", formValue).subscribe({
      next: (res: any) => {
        alert("Employee Created ")
      }
    })
  }

}
