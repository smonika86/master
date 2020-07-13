import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm,FormGroup, FormControl,Validators } from '@angular/forms';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [JarwisService]
})
export class LoginComponent implements OnInit {
  @ViewChild('f', {static: true}) LoginForm:NgForm;
// @ViewChild('f') LoginForm:NgForm; // You can use this also
  loginForm :FormGroup; // Currenly i am using form group

  public error =null;

  // constructor(private loggingService:LoginService,private http:HttpClient)
  constructor(
    private jarwish:JarwisService,
    private Token:TokenService,
    private Router:Router,
    private Auth :AuthService
    ) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'password' :new FormControl(null,Validators.required),
    });

  }

  onSubmit(){
   /// console.log(this.LoginForm);
    console.log(this.loginForm);
    if(this.loginForm.invalid){
      return;
    }
   
    this.jarwish.login(this.loginForm.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),
    
    );
  }
handleError(error){
  this.error =error.error.error;
}
  handleResponse(data:any){
   
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.Router.navigateByUrl('/menu');
  }

}
