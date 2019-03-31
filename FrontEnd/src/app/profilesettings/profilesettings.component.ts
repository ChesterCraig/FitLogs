import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserSettingsService } from '../services/user-settings.service';

@Component({
  selector: 'app-profilesettings',
  templateUrl: './profilesettings.component.html',
  styleUrls: ['./profilesettings.component.css']
})
export class ProfilesettingsComponent implements OnInit {

  constructor(private authService: AuthService, private userSettingsService: UserSettingsService) { }

  userNote: string = null;

  ngOnInit() {
    this.userSettingsService.getNote().subscribe(
      data => {
        this.userNote = data.contents;
      }
    );
  }

  updateUserNote() {
    this.userSettingsService.updateNote(this.userNote).subscribe(
    null,
      error => {
      console.log("failed to update users note");
    }
    );
  }

}
