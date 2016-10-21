import { Component } from '@angular/core';

@Component({
  selector: 'rio-app',
  template: `{{ hello }}`,
  styles: [``]
})
export class AppComponent {
  hello = 'Hello and welcome to an interpolated world';
}
