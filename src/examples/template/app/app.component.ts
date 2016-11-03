import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'rio-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public greeting: string = 'Hello, world!';
  constructor () {}
}
