import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  login = { username: '', password: '' };
  submitted = false;

  constructor(
    public router: Router, public _loginServ:LoginService
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this._loginServ.login(this.login.username,this.login.password);
      console.log("Obtuvo token");
      if(!this._loginServ) {
        console.log("error");
      }
    }
  }
}