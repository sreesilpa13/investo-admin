import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {

  showSuccess=false;

  adid:string;
  sad:string;
  dad:string;
  adprice:string;
  orderid:string;
  ref1:string;
  ref2:string;
  rem:string;


  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';

  stepinitiation(ngForm : NgForm){
    console.log('called')
    ngForm.resetForm({
      adid:'',
      sad:'',
      dad:'',
      adprice:'',
      orderid:'',
      ref1:'',
      ref2:'',
      rem:''
   });

   this.showSuccess=true;
   setTimeout(() => {
    this.showSuccess = false;
  }, 5000);

  }
}
