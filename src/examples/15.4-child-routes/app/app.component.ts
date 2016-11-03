import { Component } from '@angular/core';

@Component({
  selector: 'rio-app',
  template: `
    <a [routerLink]="['/first-parent']">First</a> |
    <a [routerLink]="['/second-parent']">Second</a> |
    <a [routerLink]="['/child-container']">Child Container</a>
    <div><router-outlet></router-outlet></div>
`,
})
export class AppComponent {}
