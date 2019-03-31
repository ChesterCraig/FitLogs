import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Entry } from '../models/entry';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  baseUrl = environment.apiUrl + 'Users/Note/';

  constructor(private http: HttpClient) { }

  // Fetch users note
  getNote(): Observable<any> {
    return this.http.get<string>(this.baseUrl);
  }

  // update users note
  updateNote(note: string) {
    const userNoteDto = {
      'contents': note
    };

    return this.http.put<Entry>(this.baseUrl, userNoteDto);
  }

}
