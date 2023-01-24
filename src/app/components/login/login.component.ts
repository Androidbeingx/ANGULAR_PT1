import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user!: string;
  password!: string;

  loginform = new FormGroup({

    user: new FormControl ('', [
      Validators.required
    ]),
    password: new FormControl ('', [
      Validators.required
    ])
  })

  constructor() {}

  submit(): void {
    console.log(this.loginform.value.user);
    console.log(this.loginform.value.password);
  }
}
