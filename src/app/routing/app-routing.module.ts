import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PasswordResetComponent } from '../ui/user/password-reset/password-reset.component';

const routes: Routes = [
  { path: 'password-reset', component: PasswordResetComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
