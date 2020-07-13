import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm,FormGroup,FormBuilder, FormControl,Validators } from '@angular/forms';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { ConfirmedValidator } from 'src/app/auth/components/register/confirmed.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f', {static: false}) RegisterForm: NgForm;

public error =null;

registerForm :FormGroup; // Currenly i am using form group
confirmPassword :FormGroup; // Currenly i am using form group

  constructor(
    private jarwish:JarwisService,
    private Token : TokenService,
    private Router : Router,
    private formBuilder: FormBuilder
    ) { }
    numericOnly(event) {    
      let patt = /^([0-9])$/;
      let result = patt.test(event.key);
      return result;
    }
  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      // 'emailData':new FormGroup({
      // 'email' : new FormControl(null,[Validators.required,Validators.email])
      // }),
      'name' : new FormControl(null,[Validators.required]),
      'lastname' : '',
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'password' :new FormControl(null,Validators.required),
      'phone':  new FormControl(['', [Validators.required, Validators.minLength(10)]])
    });

    this.confirmPassword = this.formBuilder.group({
      'cpassword': new FormControl(['', [Validators.required]]),
    },{ 
      validator: ConfirmedValidator('password', 'cpassword')
    });

  }
  get f() { return this.confirmPassword.controls; }

  onSubmit() {
  
    this.jarwish.signup(this.registerForm.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),
    );
  }

  handleError(error){
    this.error =error.error.error;
  }
    handleResponse(data:any){
     
      this.Token.handle(data.access_token);
      this.Router.navigateByUrl('/menu');
    }

}
