import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'first', pathMatch: 'full' },
      { path: 'first', component: FirstComponent },
      { path: 'second', component: SecondComponent },
      { path: '**', component: FirstComponent },
    ])
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
