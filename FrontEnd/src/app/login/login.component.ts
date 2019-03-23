import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyjsService } from '../services/alertifyjs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyjsService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        console.log('Login successful');
        this.alertify.success('Login successful');
      },
      error => {
        this.alertify.warning('Login failed');
    });
  }

  logout() {
    this.authService.logOut();
    this.alertify.message('Logged out');
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
}
