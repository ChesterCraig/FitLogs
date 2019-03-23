import { Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EntrylistComponent } from './entrylist/entrylist.component';
import { EntryComponent } from './entry/entry.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfilesettingsComponent } from './profilesettings/profilesettings.component';


// Works on first match wins..
export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'entries', component: EntrylistComponent, canActivate: [AuthGuard]},
  {path: 'settings', component: ProfilesettingsComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent}
];
