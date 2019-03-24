import { Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { EntrylistComponent } from './entrylist/entrylist.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfilesettingsComponent } from './profilesettings/profilesettings.component';


// Works on first match wins..
export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'entries', component: EntrylistComponent, canActivate: [AuthGuard]},
  {path: 'profile-settings', component: ProfilesettingsComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent}
];
