import { Component, OnInit } from '@angular/core';
import { EntryService } from '../services/entry.service';
import { Entry } from '../models/entry';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-entrylist',
  templateUrl: './entrylist.component.html',
  styleUrls: ['./entrylist.component.css']
})
export class EntrylistComponent implements OnInit {

  constructor(private entryService: EntryService, private authService: AuthService) { }

  entries: Entry[];

  ngOnInit() {
    this.entryService.getAllEntries(this.authService.getUserID())
      .subscribe(data => {
        this.entries = data;
      });
    }

  addEntry() {
    this.entryService.createEntry(this.authService.getUserID())
      .subscribe(data => {
        this.entries.unshift(data);
      });
  }

  // Triggered by output emitter on child Entry component
  deleteEntry(entryToDelete: Entry) {
    this.entries = this.entries.filter(entry => entry.id !== entryToDelete.id);
  }
}
