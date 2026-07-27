import { Routes } from '@angular/router';
import { SignalsIntro } from './signals-intro/signals-intro';
import { Effects } from './effects/effects';

export const routes: Routes = [
  { path: '', redirectTo: 'elements', pathMatch: 'full' },
  { path: 'intro', component: SignalsIntro },
  { path: 'effects', component: Effects },
];
