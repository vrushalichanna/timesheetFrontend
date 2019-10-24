import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HostConfig } from 'src/common/hostconfig';
import { LoggedInUser } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private ngZone: NgZone,
    private router: Router,
    private httpclient: HttpClient,
  ) { }
  errorMsg: string;
  loginUser: LoggedInUser = new LoggedInUser();
  userLogin = new FormGroup({});

  ngOnInit() {
  }

  login(){
    let message = 'Login Successfully'
    let action;
    if (!this.loginUser.emailId || !this.loginUser.password) {
      this.errorMsg = "login";
      console.log(this.loginUser);
    }
    else{
      const headers = new HttpHeaders()
        .set("Content-Type", "application/json")
        .set("Access-Control-Allow-Origin", "*")
        .set("Access-Control-Allow-Headers",
          "Content-Type,x-requested-with,Authorization,Access-Control-Allow-Origin")
        .set("EmailId", this.loginUser.emailId)
        .set("password", this.loginUser.password);
      console.log(headers);
      return (
        this.httpclient.post(HostConfig.host + "/employee", {}, { headers }).subscribe( res => {
              this.loginUser = <LoggedInUser>res;
              console.log(this.loginUser);
              // this.progressSpinner = true;
              // this.setPermission();
              sessionStorage.setItem("loggedInUser", JSON.stringify(this.loginUser));
                sessionStorage.setItem("loggedInUser", JSON.stringify(this.loginUser) );
              // this.progressSpinner = false;
              setTimeout(() => { this.ngZone.run(() => this.router.navigate(["/"])); }, 2000);
              // setTimeout(() => {
              //   // this.progressSpinner = false;
              // }, 2000);
              error => {
              if (error.status === 402) {
                this.errorMsg =
                  "Your Account has been expired please contact to Administrator.";
              } else {
                console.log(error);
                this.errorMsg ="Please provide valid Employee Id  and Password.";
              }
              } 
          })
      );
    }
  }

}
