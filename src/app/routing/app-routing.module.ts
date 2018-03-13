import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ValidationExampleComponent } from '../ui/user/validation-example/validation-example.component';
import { SuccessfulResetComponent } from '../ui/user/successful-reset/successful-reset.component';


const routes: Routes = [
  { path: 'reset-password', component: ValidationExampleComponent },
  { path: 'successful-reset', component: SuccessfulResetComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
