import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'bashee'
  password = 'dummy'
  errorMessage = 'invalid credentials'
  invalidLogin = false
  

  constructor(private router : Router,
    private hardcodeAuthenticationService: HardCodedAuthenticationService) { }

  ngOnInit() {
  }
  handleLogin() {
    // console.log(this.username);
    if(this.hardcodeAuthenticationService.authenticate(this.username,this.password)) {
      console.log(this.username + this.password)
     this.router.navigate(['welcome',this.username])
     this.invalidLogin=false
    }else {
      this.invalidLogin=true
    }
  }
}
