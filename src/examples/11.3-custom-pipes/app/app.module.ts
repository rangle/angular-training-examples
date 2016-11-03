import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoutPipe } from './shout.pipe';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    ShoutPipe,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
