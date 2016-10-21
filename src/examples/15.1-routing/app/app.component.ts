import { Component } from '@angular/core';

@Component({
  selector: 'rio-app',
  template: `
    <a [routerLink]="['/first']">First</a> |
    <a [routerLink]="['/second']">Second</a>
    <div><router-outlet></router-outlet></div>
`,
})
export class AppComponent {}
