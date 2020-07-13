import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { $ } from 'protractor';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})

export class HeaderComponent implements OnInit {

  public loggedIn : boolean;
  status: boolean = false;

  constructor(
    private Auth:AuthService,
    private Router : Router,
    private Token :TokenService
    
  ) { }

  ngOnInit(): void {

    this.Auth.authStatus.subscribe(value => this.loggedIn = value);

  }

// Set status of sidebar navigaation

sidebarmenu__menu(){
      this.status = !this.status;       
  }
  
  logout(event:MouseEvent){

    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.Router.navigateByUrl('/login');
  }

}
