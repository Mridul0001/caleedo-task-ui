import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CommonService } from '../services/common.service';
import { PARAMMAPPING } from '../constants/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:CommonService) { }
  isLoading:boolean = true;
  dataValues:any;
  thresholds:any;
  params:any=PARAMMAPPING;
  displayedColumns: string[] = ['custId', 'param', 'value', 'date'];
  ngOnInit(): void {
    this.fetchAllValues();
  }

  //This logic can be optimized depending upon the needs, but fetching all for now
  fetchAllValues(){
    let values = this.service.getAQIDate();
    let thresholds = this.service.getAllThresholds();
    //Using forkJoin to let all the observables complete first
    forkJoin([values,thresholds]).subscribe({
      next:([values,thresholds])=>{
        this.dataValues=values;
        this.thresholds=thresholds;
        // console.log(this.dataValues);
        // console.log(this.thresholds);
        this.isLoading=false;
      },
      error:(err)=>{
        console.log(err);
        this.isLoading=false;
      }
    })
  }

  isValid(value:any,id:number){
    let newId = id.toString();
    if(value<this.thresholds[id].lowerValue || value>this.thresholds[id].upperValue){return false}
    return true;
  }
}
