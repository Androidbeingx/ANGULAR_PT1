import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user!: string ;
  password!: string;
  rol!: string;
  mail!: string;
  status!: string;
  gender!: string;
  info!: string[];
  condi!: boolean;

  newUser!: User;
  arrayUsers!: User[];

  registerform = new FormGroup ({
    user: new FormControl ('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('^[a-zA-Z]+$')
    ]),
    password: new FormControl ('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^[A-Za-z0-9]+$')
    ]),
    password1: new FormControl ('', [
      Validators.required
    ]),
    mail: new FormControl ('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
    ]),
    status: new FormControl ('', [
      Validators.required
    ]),
    gender: new FormControl ('', [
      Validators.required
    ]),
    info: new FormControl ('', [

    ]),
    condi: new FormControl ('', [
      Validators.requiredTrue
    ])
  })
  
  constructor(private serviceUsers: UsersService) {
    
  }
  registerUser(){

    this.serviceUsers.currentUsers.subscribe(
      arrayuser => this.arrayUsers=arrayuser
    )
    // Nuevo usuario
    this.newUser = new User(
      String(this.registerform.value.user),
      String(this.registerform.value.password),
      "buyer",
      String(this.registerform.value.mail),
      String(this.registerform.value.status),
      String(this.registerform.value.gender),
      [],
      Boolean(this.registerform.value.condi) 
    )
    this.arrayUsers.push(this.newUser);

    this.serviceUsers.changeArrayUsers(this.arrayUsers)
    
  }
  response!:string;
  submit() {
    this.registerUser();
    this.response = "User successfully registered";
  }
}
