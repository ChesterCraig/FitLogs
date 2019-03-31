import { Component, OnInit } from '@angular/core';
import { UserSettingsService } from '../services/user-settings.service';

@Component({
  selector: 'app-usersummary',
  templateUrl: './usersummary.component.html',
  styleUrls: ['./usersummary.component.css']
})
export class UsersummaryComponent implements OnInit {

  constructor(private userSettingsService: UserSettingsService) { }
  userNote = '';

  ngOnInit() {
    this.userSettingsService.getNote().subscribe(
      data => {
        this.userNote = data.contents;
      }
    );
  }

}
