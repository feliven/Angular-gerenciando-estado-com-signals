import { Routes } from '@angular/router';
import { SignalsIntro } from './signals-intro/signals-intro';

export const routes: Routes = [
  { path: '', redirectTo: 'elements', pathMatch: 'full' },
  { path: 'intro', component: SignalsIntro },
];
