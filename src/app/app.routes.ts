import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { NgForEx } from './components/ng-for-ex/ng-for-ex';
import { NgIfEx } from './components/ng-if-ex/ng-if-ex';
import { NgclassEx } from './components/ngclass-ex/ngclass-ex';
import { BasicSignal } from './components/basic-signal/basic-signal';
import { GetAPIEx } from './components/get-apiex/get-apiex';
import { VendorMaster } from './components/vendor-master/vendor-master';
import { EmployeeApp } from './components/employee-app/employee-app';
import { ReactiveEmployeeForm } from './components/reactive-employee-form/reactive-employee-form';
import { DataTypes } from './components/data-types/data-types';
import { User } from './components/user/user';
import { Admin } from './components/admin/admin';
import { NewEMployeeForm } from './components/new-employee-form/new-employee-form';
import { NpotFound } from './components/npot-found/npot-found';
import { RxjsBasci } from './components/rxjs-basci/rxjs-basci';
import { ReactiveAdv } from './components/reactive-adv/reactive-adv';
import { ReactAdvMultple } from './components/react-adv-multple/react-adv-multple';
import { Signaladv } from './components/signaladv/signaladv';

export const routes: Routes = [
    
    {
        path:'',
        redirectTo:'ng-for-example',
        pathMatch:'full'
    },
    {
        path: 'databinding',
        component: DataBinding
    },
    {
        path: 'data-types',
        component: DataTypes
    },
    {
        path: 'ng-for-example',
        component: NgForEx
    },
     {
        path: 'react-adv',
        component: ReactiveAdv
    },
      {
        path: 'react-adv-multple',
        component: ReactAdvMultple
    },
     {
        path: 'rxjs-basic',
        component: RxjsBasci
    },
    {
        path: 'user-page',
        component: User
    },
    {
        path: 'ng-if-ex',
        component: NgIfEx
    },
    {
        path: 'ng-class',
        component: NgclassEx
    },
    {
        path: 'signal-adv',
        component: Signaladv
    },
    {
        path: 'vendor',
        component: VendorMaster
    },
    {
        path: 'employeeapp',
        component: EmployeeApp
    },
    {
        path: 'admin',
        component: Admin
    },
    {
        path: 'signal-basic',
        component: BasicSignal
    },
    {
        path: 'get-api',
        component: GetAPIEx
    },
    {
        path: 'employee-list',
        component: ReactiveEmployeeForm
    },
    {
        path: 'employee-form/:empid',
        component: NewEMployeeForm
    },
    {
        path:'**',
        component: NpotFound
    }
];
