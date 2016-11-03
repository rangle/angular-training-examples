import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloFromAnotherWorldComponent } from './hello-from-another-world.component';

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    HelloFromAnotherWorldComponent,
  ],
  imports: [
    BrowserModule,
  ],
})
export class AppModule {}
