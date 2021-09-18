import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DesignRoutingModule } from './lvjinya2-routing.module';

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


const COMPONENTS: any[] = [DesignColorsComponent, DesignIconsComponent,HeroesComponent,
HeroesComponent4,HeroesComponent5,HeroesComponent6,HeroesComponent7,HeroesComponent8,HeroesComponent9,HeroesComponent9_1,
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, DesignRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class DesignModule {}
