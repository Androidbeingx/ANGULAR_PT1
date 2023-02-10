import { Component} from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user!:string;
  constructor (private serviceUsers: UsersService){}
   /**
   * Verify if the localstorage is created
   * @returns boolean true or false
   */  
   loggedIn() {
    this.user = JSON.parse(localStorage.getItem("username") || '{}')
    return localStorage.getItem("username") ? true : false;
  }
  }
 

    

  