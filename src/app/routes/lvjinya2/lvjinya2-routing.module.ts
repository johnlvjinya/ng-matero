import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignColorsComponent } from './colors/colors.component';
import { DesignIconsComponent } from './icons/icons.component';
import { HeroesComponent } from './r3/r3.component';
import { HeroesComponent4 } from './r4/r4.component';
import { HeroesComponent5 } from './r5/r5.component';
import { HeroesComponent6 } from './r6/r6.component';
import { HeroesComponent7 } from './r7/r7.component';
import { HeroesComponent8 } from './r8/r8.component';
import { HeroesComponent9 } from './r9/r9.component';
import { HeroesComponent9_1 } from './r9_1/r9_1.component';

const routes: Routes = [
  { path: 'r1', component: DesignColorsComponent },
  { path: 'r2', component: DesignIconsComponent },
  { path: 'r3', component: HeroesComponent },
  { path: 'r4', component: HeroesComponent4 },
  { path: 'r5', component: HeroesComponent5 },
  { path: 'r6', component: HeroesComponent6 },
  { path: 'r7', component: HeroesComponent7 },
  { path: 'r8', component: HeroesComponent8 },
  { path: 'r9', component: HeroesComponent9 },
  { path: 'r9_1', component: HeroesComponent9_1 },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignRoutingModule {}
