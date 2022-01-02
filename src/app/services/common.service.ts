import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  //should be configured via environment vars
  private readonly _caleedoApiUrl:string = "https://caleedo-task-api.herokuapp.com/"
  constructor(private http:HttpClient) { }

  public addNewValue(body:any){
    return this.http.post(`${this._caleedoApiUrl}v1/addvalue`,body);
  }

  public updateValue(body:any){
    return this.http.post(`${this._caleedoApiUrl}v1/updatethreshold`,body);
  }

  public getAQIDate(){
    return this.http.get(`${this._caleedoApiUrl}v1/getallvalues`);
  }

  public getAllThresholds(){
    return this.http.get(`${this._caleedoApiUrl}v1/getthersholds`);
  }
}
