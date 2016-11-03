import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'first', pathMatch: 'full' },
      { path: 'first', component: FirstComponent },
      { path: 'second', component: SecondComponent },
      { path: 'users/:id', component: UsersComponent },
      { path: '**', component: FirstComponent },
    ])
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
