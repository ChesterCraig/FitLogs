import { Component, OnInit } from '@angular/core';
import { UserSettingsService } from '../services/user-settings.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-usersummary',
  templateUrl: './usersummary.component.html',
  styleUrls: ['./usersummary.component.css']
})
export class UsersummaryComponent implements OnInit {

  constructor(private userSettingsService: UserSettingsService, private authService: AuthService) { }
  userNote = '';

  ngOnInit() {
    this.userSettingsService.getNote(this.authService.getUserID()).subscribe(
      data => {
        this.userNote = data.contents;
      }
    );
  }
}
