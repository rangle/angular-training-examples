import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomComponent } from './custom.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    CustomComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
