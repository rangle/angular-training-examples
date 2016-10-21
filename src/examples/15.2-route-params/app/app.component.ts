import { Component } from '@angular/core';

@Component({
  selector: 'rio-app',
  template: `
    <a [routerLink]="['/first']">First</a> |
    <a [routerLink]="['/second']">Second</a> |
    <a [routerLink]="['/users', 'Pat']">User Page</a>
    <div><router-outlet></router-outlet></div>
`,
})
export class AppComponent {
}
