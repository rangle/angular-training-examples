import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FirstParentComponent } from './first-parent.component';
import { SecondParentComponent } from './second-parent.component';
import { ChildContainerComponent } from './child-container.component';
import { FirstChildComponent } from './first-child.component';
import { SecondChildComponent } from './second-child.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    FirstParentComponent,
    SecondParentComponent,
    ChildContainerComponent,
    FirstChildComponent,
    SecondChildComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
