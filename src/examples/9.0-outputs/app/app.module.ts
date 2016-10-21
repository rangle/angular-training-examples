import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickAbleComponent } from './clickable.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    ClickAbleComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
