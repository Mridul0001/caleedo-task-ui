import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CUST, PARAMS } from '../constants/constants';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-add-value',
  templateUrl: './add-value.component.html',
  styleUrls: ['./add-value.component.css']
})
export class AddValueComponent implements OnInit {

  constructor(private fb:FormBuilder, private service:CommonService) { }

  //Formgroup for add new values form
  addValueForm:FormGroup = this.fb.group({
    custId:['',Validators.required],
    paramId:['',Validators.required],
    value:['',Validators.required]
  });

  //Api message
  message:string = "";
  //Parameter id and values imported from global constants
  params = PARAMS;
  customers = CUST;
  genericErrorMessage:string = "*Required field";
  
  ngOnInit(): void {
  }

  handleSubmit(){
    if(this.addValueForm.valid){
      this.service.addNewValue(this.addValueForm.value).subscribe({
        error:(err)=>{
          this.message=err;
          console.error(err)
        },
        complete:()=>{
          this.message="Value updated successfully";
          setTimeout(()=>{
            this.message=""
          },2000)
        }
      });
    }
  }

}
