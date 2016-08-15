import { Component } from '@angular/core';
import {
  HelloFromAnotherWorldComponent,
} from './hello-from-another-world.component';

@Component({
  directives: [HelloFromAnotherWorldComponent],
  selector: 'app-root',
  template: `<hello-from-another-world></hello-from-another-world>`,
  styles: [``]
})
export class AppComponent {}
