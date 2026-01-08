import { Component, inject } from '@angular/core';
import { BehaviorSubject, from, interval, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { Utility } from '../../services/utility';

@Component({
  selector: 'app-rxjs-basci',
  imports: [],
  templateUrl: './rxjs-basci.html',
  styleUrl: './rxjs-basci.css',
})
export class RxjsBasci {

  $obserb1 = new Observable<number>(res => {
    res.next(121)
  });

  $timer = interval(2000);

  //cityList: string[]= ['Pune',"Mumbai",'Thane'];

  $cityList = of(['Pune', "Mumbai", 'Thane']);
  $student = of({ name: 'Chetanm', city: 'Mumbai', emial: 'chetan@gmail.com' })

  $stateList = from(["Maha", "Punjab", "MP", "Goa"])

  //Uni cast (Cold Observable)

  $loggedUserNameSub: Subject<string> = new Subject<string>;

  $LoggedUserRole: BehaviorSubject<string> = new BehaviorSubject<string>("Admin")

  $loggedUserRolesReplaySub: ReplaySubject<string[]> = new ReplaySubject<string[]>;


  utilitySrv = inject(Utility)



  constructor() {

    this.utilitySrv.$UserNameList.subscribe(userNames=>{
      debugger;
    })
    // this.$obserb1.subscribe(num => {
    //   debugger;
    // })

    // this.$timer.subscribe(time=>{
    //   console.log(time)
    // })

    this.$cityList.subscribe(citys => {
      debugger;
    })
    // this.$student.subscribe(stud=>{
    //   debugger;
    // })
    this.$stateList.subscribe(state => {
      debugger;
    })

    this.$loggedUserNameSub.subscribe(res => {
      debugger;
    })
    this.$loggedUserNameSub.next("Chetan")
    this.$loggedUserNameSub.next("Rahul")
    this.$loggedUserNameSub.next("Ankit")
    this.$loggedUserNameSub.next("Raman")
    //multicast (Hot Obserble)

    this.$LoggedUserRole.subscribe(role => {
      debugger;
    })

    this.$LoggedUserRole.next("SuerAdmin")
    this.$loggedUserRolesReplaySub.subscribe(roles => {
      debugger;
    })

    this.$loggedUserRolesReplaySub.next(["Guest","Admin"])
  }






}
