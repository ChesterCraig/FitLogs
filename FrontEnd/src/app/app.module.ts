import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EntrylistComponent } from './entrylist/entrylist.component';
import { EntryComponent } from './entry/entry.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UsersummaryComponent } from './usersummary/usersummary.component';

import { routes } from './routes';
import { AuthGuard } from './guards/auth.guard';
import { ProfilesettingsComponent } from './profilesettings/profilesettings.component';




// Bring in services and put them in providers???

export function tokenGetter(): string {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EntrylistComponent,
    EntryComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UsersummaryComponent,
    ProfilesettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,                       // How it gets token
        whitelistedDomains: ['localhost:5001'],         // Routes to pass token
        blacklistedRoutes: ['localhost:5001/Auth']      // Routes without token
      }
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
