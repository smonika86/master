import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent, ProfileComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    LoginComponent, 
    RegisterComponent, 
    ResetPasswordComponent
    
  ]
})
export class AuthModule { }
