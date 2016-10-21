import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { FirstParentComponent } from './first-parent.component';
import { SecondParentComponent } from './second-parent.component';
import { ChildContainerComponent } from './child-container.component';
import { FirstChildComponent } from './first-child.component';
import { SecondChildComponent } from './second-child.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'first-parent', pathMatch: 'full' },
      { path: 'first-parent', component: FirstParentComponent },
      { path: 'second-parent', component: SecondParentComponent },
      { path: 'child-container', component: ChildContainerComponent, children: [
        { path: '', redirectTo: 'first-child', pathMatch: 'full' },
        { path: 'first-child', component: FirstChildComponent },
        { path: 'second-child', component: SecondChildComponent },
      ]},
      { path: '**', component: FirstParentComponent },
    ])
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
