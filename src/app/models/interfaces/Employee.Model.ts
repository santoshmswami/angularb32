export interface EmployeeList {
    employeeId: number,
    fullName: string,
    email: string,
    phone: string,
    gender: string,
    dateOfJoining: Date,
    employeeType: string,
    salary: number,
    departmentName: string,
    designationName: string
}

export interface IVendorModel {
    vendorId: number;
    vendorName: string;
    contactNo?: string;
    emailId: string;
 
}