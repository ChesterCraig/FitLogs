import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Entry } from '../models/entry';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  baseUrl = environment.apiUrl + 'Users/Entry/';

  constructor(private http: HttpClient) { }

  getAllEntries(userId: number): Observable<Entry[]> {
    return this.http.get<Entry[]>(this.baseUrl);
  }

  updateEntry(userId: number, updatedEntry: Entry): Observable<Entry> {
    return this.http.put<Entry>(this.baseUrl + updatedEntry.id, updatedEntry);
  }

  removeEntry(userId: number, remEntry: Entry) {
    return this.http.delete(this.baseUrl + remEntry.id);
  }

  createEntry(userId: number): Observable<Entry> {
    const newEntry: Entry = {
      'date': new Date(Date.now()),
      'userId': userId
    };
    return this.http.post<Entry>(this.baseUrl, newEntry);
  }
}
