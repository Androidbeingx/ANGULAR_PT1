import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user!: string;
  password!: string;

  registerform = new FormGroup ({
    user: new FormControl ('', [
      Validators.required
    ]),
    password: new FormControl ('', [
      Validators.required
    ])
  })
  
  constructor() {}

  submit(): void {
    console.log(this.registerform.value.user);
    console.log(this.registerform.value.password);
  }
}
