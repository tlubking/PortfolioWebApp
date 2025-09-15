import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Portfolio } from './portfolio/portfolio';
import { Contact } from './contact/contact';
import { Resume } from './resume/resume';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'portfolio', component: Portfolio },
  { path: 'resume', component: Resume },
  { path: 'contact', component: Contact },
  { path: '**', component: Home, pathMatch: 'full' },
];
