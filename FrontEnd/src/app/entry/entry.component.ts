import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from '../models/entry';
import { EntryService } from '../services/entry.service';
import { AuthService } from '../services/auth.service';
import { AlertifyjsService } from '../services/alertifyjs.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  @Input() thisEntry: Entry;
  @Output() delete: EventEmitter<Entry> = new EventEmitter();

  editMode: Boolean;
  entryForm: FormGroup;

  constructor(
    private entryService: EntryService,
    private authService: AuthService,
    private alertify: AlertifyjsService,
    private formBuilder: FormBuilder) {}


  ngOnInit() {
    this.disableEdit();
    this.entryForm = this.formBuilder.group({
      date: [new DatePipe('en-gb').transform(this.thisEntry.date, 'y-MM-dd'), Validators.required],
      summary: [this.thisEntry.summary],
      activity: [this.thisEntry.activity]
    });
  }

  submitEntryChanges() {
    // On submit of the form
    if (!this.entryForm.dirty) {
      this.disableEdit();
      return;
    }

    const entryToSubmit: Entry = {
      id: this.thisEntry.id,
      userId: this.thisEntry.userId,
      date: this.entryForm.value.date,
      summary: this.entryForm.value.summary,
      activity: this.entryForm.value.activity
    };

    this.entryService.updateEntry(this.authService.decodedToken.nameId, entryToSubmit).subscribe(
        newEntry => {
          this.thisEntry = entryToSubmit;
          this.alertify.success('Changes Saved');
          this.disableEdit();
        },
        error => {
          this.alertify.error('Failed to update!');
        }
    );
  }

  removeEntry() {
    this.alertify.confirm('Are you sure?', () => {
      this.entryService.removeEntry(this.authService.decodedToken.nameId, this.thisEntry).subscribe(
        success => {
          this.alertify.success('Removed');
          this.delete.emit(this.thisEntry);
        }, failed => {
          this.alertify.error('Failed to remove entry');
        });
    });
  }

  // Helper functions for handling user interactions
  enableEdit() {
      this.editMode = true;
  }

  disableEdit() {
    this.editMode = false;
  }
}
