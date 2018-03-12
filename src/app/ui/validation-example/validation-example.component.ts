import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-validation-example',
  templateUrl: './validation-example.component.html',
  styleUrls: ['./validation-example.component.css']
})
export class ValidationExampleComponent implements OnInit {

  @ViewChild('passwordResetForm') currentForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  passRes: any = {
    email:"",
    newPassword:"",
    confirmPassword:""
  };

  validateInput(ctrlName){
    this.currentForm.controls[ctrlName].markAsDirty();
    return this.currentForm.controls[ctrlName].valid;
  }

  onSubmit(){
    debugger;
    let isFormValid = this.currentForm.valid;

    isFormValid = this.validateInput("email");
    if(!isFormValid){
      return;
    }

  }

}
