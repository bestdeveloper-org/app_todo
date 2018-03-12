import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  @ViewChild('resetForm') currentForm: NgForm;

  constructor() {
  }

  ngOnInit() {
  }

  validateInput(ctrlEmail) {
    this.currentForm.controls[ctrlEmail].markAsDirty();
    return this.currentForm.controls[ctrlEmail].valid;
  }

  onSubmit() {
    let isFormValid = this.currentForm.valid;

    isFormValid = this.validateInput("email");
    if (!isFormValid) {
      return
    }

  }

}
