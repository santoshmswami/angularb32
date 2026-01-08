import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Utility {

  appName: string = "Demo App";

  $UserNameList = of(["Punam","rahul","chetan"])

  getSumIOf2Num(num1: number, num2: number  ) {
    
    return num1 +  num2;
  }

  getSumOf3Num(num1: number, num2: number, num3:number){
    return num1 +  num2 + num3;
  }

  getSum(...rest:number[]) {
     
    let sum = 0;
    for (let index = 0; index < rest.length; index++) {
       sum =  sum + rest[index]
    }
    return sum;
  }
  
  
}
