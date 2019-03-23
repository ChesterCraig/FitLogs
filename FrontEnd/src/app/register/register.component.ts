import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyjsService } from '../services/alertifyjs.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyjsService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(next => {
      this.alertify.success('Registration successfull');
      this.cancelRegister.emit();
    },
    error => {
      this.alertify.error('Registration failed');
    });
  }

  cancel() {
    this.cancelRegister.emit();
  }

}
