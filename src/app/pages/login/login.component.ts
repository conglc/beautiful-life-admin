import { Component, OnInit } from '@angular/core';

import { LoginModel } from '../../models/login.model';
import { Router } from '@angular/router';

import { AuthService } from '../../service/auth.service';
import { AlertifyService } from '../../service/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new LoginModel();

  constructor(
    private route: Router,
    private authService: AuthService,
    private alertifyService: AlertifyService
  ) { }

  ngOnInit() {
    this.checkLoggedIn();
  }

  checkLoggedIn() {
    if (this.authService.loggedIn()) {
      this.route.navigateByUrl('/');
    }
  }

  login() {
    this.authService.login(this.model).subscribe(response => {
      localStorage.setItem('token', response.token);
      this.route.navigateByUrl('/');
    }, error => {
      this.alertifyService.error("The username or password is incorrect");
      console.log(error);
    });
  }
}
