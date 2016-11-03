import {Component, Input} from '@angular/core';

@Component({
  selector: 'rio-custom',
  template: `{{ value }}`,
})
export class CustomComponent {
  @Input() value;
}
