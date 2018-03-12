import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ValidationExampleComponent } from '../ui/validation-example/validation-example.component';


const routes: Routes = [
  { path: 'reset-password', component: ValidationExampleComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
