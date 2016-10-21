import { Component } from '@angular/core';

@Component({
  selector: 'rio-app',
  template: `Shout: {{ text | shout }}, Exclaim: {{ text | shout:true }}`,
})
export class AppComponent {
  text = 'hello world';
}
