import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PARAMS } from '../constants/constants';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private fb:FormBuilder, private service:CommonService) { }

  //Formgroup for update threshold values form
  thresholdForm:FormGroup = this.fb.group({
    paramId:['',Validators.required],
    lowerValue:['',Validators.required],
    upperValue:['',Validators.required]
  });

  //Api message
  message:string = "";
  //Parameter id and values imported from global constants
  params = PARAMS;
  genericErrorMessage:string = "*Required field";
  
  ngOnInit(): void {
  }

  handleUpdate(){
    if(this.thresholdForm.valid){
      this.service.updateValue(this.thresholdForm.value).subscribe({
        error:(err)=>{this.message=err;console.error(err)},
        complete:()=>{
          this.message="Value updated successfully";
          setTimeout(()=>{
            this.message=""
          },2000)
        } 
      })
    }
  }
}
