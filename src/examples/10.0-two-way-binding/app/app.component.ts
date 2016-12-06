import { Component } from '@angular/core';

@Component({
  selector: 'rio-app',
  template: `
    <rio-child [(value)]="parentValue"></rio-child>
    <div>Parent Value: {{ parentValue }}</div>
`,
})
export class AppComponent {
  parentValue = 'two way binding';
}
