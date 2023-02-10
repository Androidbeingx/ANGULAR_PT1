import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //Calls the user service with database and a router service
  constructor(private serviceUsers: UsersService, private router: Router) {
    
  }

  //LOGIN FORM

  data!: string[];

  loginform = new FormGroup({

    user: new FormControl ('', [
      Validators.required
    ]),
    password: new FormControl ('', [
      Validators.required
    ])
  })

  //SINCRONIZE THE SERVICE

  logUsers!: User[]; 
  usercheck!: User;
  

  /**
   * Get the users values from the form login
   * Compares it to a database
   * Get object User if found and null if not
   * If success set cookie and localstorage
   */
  doLogin(): void {

    //parameters given by the user
    let userLog = String(this.loginform.value.user);
    let passLog = String(this.loginform.value.password);

    this.serviceUsers.currentUsers.subscribe(
      userarray => this.logUsers = userarray
    )

    //Check with the service if the values matches with the database
    this.usercheck = this.serviceUsers.checkUser(this.logUsers, userLog, passLog)
    
    //If the user exists and checked
    if (this.usercheck != null){

      //create cookies
      let cookie: string[] = [this.usercheck.User, this.usercheck.Rol];
      this.serviceUsers.setCookie('Usercookie', JSON.stringify(cookie));

      //create localstorage of a user object
      //localStorage.setItem("Userstorage", this.usercheck.getObject()); //da problemas asi
      localStorage.setItem("username", JSON.stringify(this.usercheck.User));
      localStorage.setItem("role", JSON.stringify(this.usercheck.Rol));
    } 

  }
  
  //CLICK LOGIN BUTTON

  response!:string;

  /**
   * Calls function doLogin 
   * if success redirect to another component
   * if not tell to user
   */


  submit() {
    this.doLogin();
    if (this.usercheck !=null){
      this.router.navigateByUrl('/home');
    }else{
      this.response = "Invalid credentials"
    }
  }

    

       
  
}
