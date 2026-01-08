import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Utility } from '../../services/utility';
import { Tabs } from "../../resuableComponent/tabs/tabs";
import { EmployeeList } from '../../models/interfaces/Employee.Model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-reactive-employee-form',
  imports: [ReactiveFormsModule, Tabs,RouterLink],
  templateUrl: './reactive-employee-form.html',
  styleUrl: './reactive-employee-form.css',
})
export class ReactiveEmployeeForm {

  http = inject(HttpClient);
  employeeList = signal<EmployeeList[]>([]);
  currentEditEmployeeName = signal<string>('');
  
  commanApiUrl: string = "https://api.freeprojectapi.com/api/EmployeeApp/";

  utilitySr  =  inject(Utility);

  tabs: string[]= ['Employee List', 'Employee Form'];
  currentTab: string = this.tabs[0];
  router = inject(Router);

  
  ngOnInit(): void {
    
    const appName= this.utilitySr.appName;
    //  setTimeout(() => {
    //   this.employeeForm.controls['fullName'].setValue("test")
    // }, 3000);
    this.getAllEmployee()
  }

  getCurrentTab(tab: string) {
    
    this.currentTab = tab;
  }

  getAllEmployee() {
    this.http.get(this.commanApiUrl + "GetEmployees").subscribe({
      next: (res: any) => {
        this.employeeList.set(res)
      }
    })
  }

  editEmployee(id: number) {
    this.router.navigate(['employee-form',id])
  }

 
  
}

 
