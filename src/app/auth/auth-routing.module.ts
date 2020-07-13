import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ProfileComponent } from './components/profile/profile.component';



const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent, 
  },

  {
    path: 'register',
    component:RegisterComponent
  },

  {
    path: 'profile',
    component:ProfileComponent
  },

  {
    path: 'reset-password',
    component:ResetPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class AuthRoutingModule { }
