import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fit-logs';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Trigger parsing of login token if we have one saved in local storage
    this.authService.parseLocalToken();
  }

}
