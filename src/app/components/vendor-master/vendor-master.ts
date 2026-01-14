import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VendorService } from '../../services/vendor-service';
import { Utility } from '../../services/utility';
import { Alerts } from '../../services/alerts';
import { NaPipe } from '../../pipes/na-pipe';
import { Highlight } from '../../directives/highlight';
import {  VendorModel } from '../../models/classes/vendor.model';
import { IVendorModel } from '../../models/interfaces/Employee.Model';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef, RowSelectionOptions } from 'ag-grid-community';
@Component({
  selector: 'app-vendor-master',
  imports: [FormsModule,NaPipe,Highlight,AgGridAngular],
  templateUrl: './vendor-master.html',
  styleUrl: './vendor-master.css',
})

export class VendorMaster implements OnInit {

  private http = inject(HttpClient);
  vendorList = signal<VendorModel[]>([]);

  utiltiySrv =  inject(Utility);

  editRecord  = signal<any>({})

   colDefs: ColDef[] = [
        { field: "vendorName" ,headerName:'Vendor Name', sortable: true},
        { field: "contactNo",headerName:'Contact', sortable: true },
        { field: "emailId",headerName:'Email' } ,
        { 
          headerName:'Action', 
          cellRenderer: (params: any) => {
            const eDiv = document.createElement('div');
            eDiv.innerHTML = `
              <button class="btn btn-sm btn-success me-2" style="padding: 4px 8px; font-size: 12px;">Edit</button>
              <button class="btn btn-sm btn-danger" style="padding: 4px 8px; font-size: 12px;">Delete</button>
            `;
            
            const editBtn = eDiv.querySelector('.btn-success');
            const deleteBtn = eDiv.querySelector('.btn-danger');
            
            editBtn?.addEventListener('click', () => {
              debugger;
              this.onEdit(params.data);
            });
            
            deleteBtn?.addEventListener('click', () => {
              this.onDelete(params.data.vendorId);
            });
            
            return eDiv;
          },
          width: 180,
          sortable: false,
          filter: false
        }
    ];
     defaultColDef: ColDef = {
    flex: 1,
  };
  rowSelection: RowSelectionOptions | "single" | "multiple" = {
    mode: "multiRow",
  };

  coruserName: string;

  // newVendorObj: any = {
  //   vendorId: 0,
  //   vendorName: "",
  //   contactNo: "",
  //   emailId: ""
  // };

  // newVendorObj: VendorModel = new VendorModel();

  newVendorObj: IVendorModel = {   
    emailId:'',
    vendorId:0,
    vendorName:''
  }
  alertServ =  inject(Alerts)

  constructor(private vendorSrv: VendorService) {
    
    this.coruserName = "";
    const resulul1 =  this.utiltiySrv.getSum(1,3,5);

    const result2 =  this.utiltiySrv.getSum(2,4,6,7,8,9);

    const result3 = this.utiltiySrv.getSumIOf2Num(2,3)
    

    const appNewNAme  =  this.utiltiySrv.appName;

    this.utiltiySrv.appName = "Aggular App"

  }

  ngOnInit(): void {
    this.getAllVendors()
  }

  onReset() {
    // this.newVendorObj = {
    //   vendorId: 0,
    //   vendorName: "",
    //   contactNo: "",
    //   emailId: ""
    // };
    //this.newVendorObj =  new VendorModel();
    this.newVendorObj = {
      contactNo:'',
      emailId:'',
      vendorId:0,
      vendorName:''
    }
  }

  // getAllVendors() {
  //   
  //   this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetBusVendors").subscribe({
  //     next: (result: any) => {
  //       this.vendorList.set(result);
  //     }
  //   })
  // }

  getAllVendors() {
    
    this.vendorSrv.getAllVendorsList().subscribe({
      next: (res: any) => {
        
        this.vendorList.set(res);
      }
    })
  }

  saveNewVendor() {
    const newObj = {}
    // this.http.post("https://api.freeprojectapi.com/api/BusBooking/PostBusVendor", this.newVendorObj).subscribe({
    //   next: (res: any) => {
    //     
    //       alert("Vendor Created Sucess");
    //       this.getAllVendors()
    //   },
    //   error: (error: any) => {
    //     
    //     alert("API Error")
    //   }
    // })
    
    this.vendorSrv.saveVendor(this.newVendorObj).subscribe({
      next: (result: any) => {
        
       // alert("Vendor Created Sucess");
        this.alertServ.showSuccess("Vendor Created Sucess")
        this.getAllVendors()
      },
      error: (error: any) => {
        alert("API Error")
      }
    })
  }

  onEdit(data: any) {
    debugger;
    this.newVendorObj = data;
    this.editRecord.set(data);
  }


  updateVendor() {
    this.http.put('https://api.freeprojectapi.com/api/BusBooking/PutBusVendors?id=' + this.newVendorObj.vendorId, this.newVendorObj).subscribe({
      next: (res: any) => {
        alert("Vendor Details Updated")
        this.getAllVendors()
      }, error: (error) => {
        alert(error.meesage)
      }
    })
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you Sure want to Delete");
    
    if (isDelete) {
      // this.http.delete("https://api.freeprojectapi.com/api/BusBooking/DeleteBusVendor?id=" + id).subscribe({
      //   next: (result) => {
      //     alert("Vendor  Deleted")
      //     this.getAllVendors()
      //   }
      // })
      this.vendorSrv.deleteVendorById(id).subscribe({
        next: (res: any) => {
           
          alert("Vendor  Deleted")
          this.getAllVendors()
        }
      })
    }

  }
}
