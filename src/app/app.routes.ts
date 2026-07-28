import { Routes } from '@angular/router';
import { SignalsIntro } from './signals-intro/signals-intro';
import { Effects } from './effects/effects';
import { ElementList } from './element-list/element-list';
import { ElementDetails } from './element-details/element-details';
import { ComputedSignal } from './computed-signal/computed-signal';

export const routes: Routes = [
  { path: '', redirectTo: 'elements', pathMatch: 'full' },
  { path: 'intro', component: SignalsIntro },
  { path: 'effects', component: Effects },
  { path: 'computed-signal', component: ComputedSignal },
  {
    path: 'elements',
    children: [
      { path: '', component: ElementList, outlet: 'list' },
      { path: '', component: ElementDetails, outlet: 'details' },
    ],
  },
];
