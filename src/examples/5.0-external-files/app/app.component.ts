import { Component } from '@angular/core';
export {
  HelloFromAnotherWorldComponent,
} from './hello-from-another-world.component';

@Component({
  selector: 'rio-app',
  template: `<hello-from-another-world></hello-from-another-world>`,
  styles: [``]
})
export class AppComponent {}
