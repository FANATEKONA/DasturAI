import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MadeniyetComponent } from './pages/madeniyet/madeniyet.component';
import { MadeniyetDetailComponent } from './pages/madeniyet/madeniyet-detail.component';
import { DasturlarComponent } from './pages/dasturlar/dasturlar.component';
import { DownloadComponent } from './pages/download/download.component';
import { LocationsComponent } from './pages/locations/locations.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'madeniyet', component: MadeniyetComponent },
  { path: 'madeniyet/:slug', component: MadeniyetDetailComponent },
  { path: 'dasturler', component: DasturlarComponent },
  { path: 'location', component: LocationsComponent },
  { path: 'download', component: DownloadComponent },
  { path: '**', redirectTo: '' },
];
