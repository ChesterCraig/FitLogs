import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.apiUrl + 'Auth';
  jwtHelper = new JwtHelperService;
  decodedToken: any;

  login(model: any) {
    return this.http.post(this.baseUrl + '/login', model)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
            this.decodedToken = this.jwtHelper.decodeToken(user.token);

          }
        })
      );
  }

  register (model: any) {
    return this.http.post(this.baseUrl + '/register', model);
  }

  logOut() {
    localStorage.removeItem('token');
  }

  loggedIn(): Boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getUserID() {
    if (this.loggedIn()) {
      return this.decodedToken.nameid;
    } else {
      console.log('Error: Trying to request current user id without being logged in.');
      return null;
    }
  }

  // if there is already a token stored, parse it
  parseLocalToken() {
    const token = localStorage.getItem('token');
    if (!this.jwtHelper.isTokenExpired(token)) {
      this.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }
}
