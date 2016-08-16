import {Component} from '@angular/core';
import {CustomComponent} from './custom-component';

@Component({
  directives: [CustomComponent],
  moduleId: module.id,
  selector: 'app-root',
  template: `<custom-component value="Hello World!"></custom-component>`,
})
export class AppComponent { }
