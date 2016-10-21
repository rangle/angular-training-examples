import { Component } from '@angular/core';

@Component({
  template: `
    Child Routes: 
    <a [routerLink]="['first-child']">First Child</a> |
    <a [routerLink]="['second-child']">Second Child</a> |
    <a [routerLink]="['/second-parent']">Second Parent</a>
    <div><router-outlet></router-outlet></div>
  `,
})
export class ChildContainerComponent {}
