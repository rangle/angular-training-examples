import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'click-able',
  template: `<input 
               type="button" 
               value="click" 
               (click)="action.emit('click')">`,
})
export class ClickAbleComponent {
  @Output() action = new EventEmitter<string>();
}
