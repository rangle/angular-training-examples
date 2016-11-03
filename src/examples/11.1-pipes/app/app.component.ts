import { Component } from '@angular/core';

@Component({
  selector: 'rio-app',
  template: '{{ accountBalance | currency }}',
})
export class AppComponent {
  accountBalance = 13.1234567;
}
