import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'rio-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor (builder: FormBuilder) {
    this.username = new FormControl('', []);
    this.password = new FormControl('', []);
    this.loginForm = builder.group({
      username: this.username,
      password: this.password
    });
  }

  login () {
    console.log(this.loginForm.value);
    // Attempt Logging in...
  }
}
