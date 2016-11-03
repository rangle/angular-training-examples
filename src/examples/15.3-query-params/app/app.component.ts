import { Component } from '@angular/core';

@Component({
  selector: 'rio-app',
  template: `
    <a [routerLink]="['/first']">First</a> |
    <a [routerLink]="['/second']">Second</a> |
    <a [routerLink]="['/users', 'Pat']">Users</a> |
    <a [routerLink]="['/users', 'Pat']" [queryParams]="{ language: 'en' }">Users with Query</a>
    <div><router-outlet></router-outlet></div>
`,
})
export class AppComponent {}
