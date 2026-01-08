import { Component, signal, WritableSignal,computed, input, linkedSignal, untracked, effect } from '@angular/core';

@Component({
  selector: 'app-signaladv',
  imports: [],
  templateUrl: './signaladv.html',
  styleUrl: './signaladv.css',
})
export class Signaladv {

  courseName: WritableSignal<string> = signal<string>("Angular");
  courseDuration: WritableSignal<string> = signal<string>("2 Months")

  courseDetails = computed(()=> "Course Name :" + untracked(this.courseName) + ", Duration : " + this.courseDuration())

 
  fName = signal<string>("Chetan")
  lName = signal<string>("Jogi")

  fullName = linkedSignal(()=> untracked(this.fName) + " "+ this.lName())

  productrPrice = signal<number>(100);
  dicount = signal<number>(0);

  cityList = signal<string[]>(["Nagpur","Pune"])

  studentObj=signal<any>({name:'Chetan',city:'Pune',mobile:'9988998877'})



  constructor() {
     
    effect(()=>{
      debugger; 
      const newProdcutPrice = this.productrPrice() * this.dicount() / 100;
      const newPrice =   this.productrPrice() - newProdcutPrice;
      //alert("Discounted Price: "+newPrice)
    })

    effect(()=>{
      debugger;
      //alert(this.courseName())
    })

    setTimeout(() => {
      this.courseName.set("React");
      //this.courseDuration.set("4 Months"); 
      this.fName.set("Rahul")
    }, 2000);

    setTimeout(() => {
      this.courseName.set("Dot Net Full Stack");
      this.courseDuration.set("4 Months"); 
       this.lName.set("Rahul")
    }, 6000);
    setTimeout(() => {
      //this.productrPrice.set(200);
    }, 7000);
  }

  chnageCity() {
    this.studentObj.update(oldObj=> ({...oldObj, city:"Mumbai"}))
  }

  Addcity(cityName: string) {
    //const existList = this.cityList();
    //existList.push(cityName)

    const arra1 = [11,22,33];
    const arry2 = [...arra1,44,55];
    debugger;
  
    this.cityList.update((oldList)=> [...oldList,cityName])
 
    
  }

  addNewCity() {
    this.cityList.set(['Panji','Noida','Delhi','Mumbai'])
  }

  chnagePPrice() {
    this.productrPrice.set(1400); 
  }

  AddTtoCart() {
    this.productrPrice.set(4300); 
  }

  chnageDicosunt(value:number) {
    this.dicount.set(value);
  }


}
