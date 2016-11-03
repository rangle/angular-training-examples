import { Component } from '@angular/core';

@Component({
  selector: 'rio-app',
  template: `
    <rio-clickable (action)="onAction($event)"></rio-clickable>
    <span>{{ output }}</span>
  `,
})
export class AppComponent {
  output: string = '';
  onAction(data) {
      this.output += data + ' ';
  }
}
