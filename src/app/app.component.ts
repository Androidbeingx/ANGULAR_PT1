import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from './models/User';
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'ticket-hub';

  constructor (private router: Router, private myCookie: CookieService, private Userservice: UsersService) {

  }
  //esta parte no funciona y no lo entiendo
  user!: string;
  localUser!:User;
  role!: string;
   
  getUsernameAndRole(){
     
  
    // Get Role of localstorage.
    
    this.role = JSON.parse(localStorage.getItem("role") || '{}');
    this.user = JSON.parse(localStorage.getItem("username") || '{}');
    }
  
 
  /**
   * Verify if the localstorage is created
   * @returns boolean true or false
   */  
  loggedIn() {
    return localStorage.getItem("username") ? true : false;
  }
   
}
