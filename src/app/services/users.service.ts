import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

   
  constructor(private router: Router, private myCookie: CookieService) { 
    //import the cookie service and the router
  }

  /**
   * Database of Users
   * Array of User class object
   */
  dataBase: User[] = [
    new User ('master', 'pass1', 'admin', 'master@gmail.com', 'Single', 'Woman', ['Market developments', 'Videogames', 'Accesories'], true),
    new User ('lollipop', 'pass2', 'buyer', 'lollipop@hotmail.com', 'Married', 'Man', ['Videogames'], true),
    new User ('axel', 'pass3', 'admin', 'axel@yahoo.es', 'Single', 'Other', ['Market developments'], true),
    new User ('rocket', 'pass4', 'buyer','rocket@gmail.com', 'Divorced', 'Woman', ['Videogames', 'Accesories'], true),
    new User ('fanatic', 'pass5', 'buyer', 'fanatic@gmail.com', 'Married', 'Man', ['Market developments'], true),
    new User ('cocoa', 'pass6', 'admin', 'cocoa@gmail.com', 'Married', 'Other', ['Market developments', 'Videogames', 'Accesories'], true),
    new User ('beet', 'pass7', 'buyer', 'beet@hotmail.com', 'Single', 'Man', [], true),
    new User ('forrestgump', 'pass8', 'buyer', 'forrestgump@gmail.com', 'Married', 'Other', ['Videogames'], true),
    new User ('gollum', 'pass9', 'buyer', 'gollum@gmail.com', 'Single', 'Other', ['Market developments', 'Videogames', 'Accesories'], true ),
    new User ('gonegirl', 'pass10', 'buyer', 'gonegirl@hotmail.com', 'Married', 'Woman', ['Accesories'], true),
    new User ('thegreenmile', 'pass11', 'admin', 'thegreenmile@gmail.com', 'Divorced', 'Man', ['Videogames', 'Accesories'], true),
    new User ('rocket', 'pass13', 'buyer', 'rocket@gmail.com', 'Single', 'Woman', [], true),
    new User ('donniedarko', 'pass14', 'buyer', 'donniedarko@hotmail.com', 'Married', 'Man', [], true),
    new User ('pathsofglory', 'pass15', 'buyer', 'pathsofglory@yahoo.es', 'Married', 'Woman', ['Videogames', 'Accesories'], true),
    new User ('scarface', 'pass16', 'admin', 'scarface@gmail.com', 'Single', 'Other', ['Videogames'], true),
    new User ('jurassicpark', 'pass17', 'admin', 'jurassicpark@gmail.com', 'Married', 'Man', ['Market developments', 'Videogames', 'Accesories'], true),
    new User ('cranberry', 'pass18', 'buyer', 'cranberry@hotmail.com', 'Divorced', 'Woman', [], true),
    new User ('guitarhero', 'pass19', 'buyer', 'guitarhero@gmail.com', 'Married', 'Woman', ['Market developments', 'Videogames', 'Accesories'], true),
    new User ('pegasus', 'pass20', 'buyer', 'pegasus@gmail.com', 'Single', 'Woman', ['Market developments'], true),
    new User ('tangerine', 'pass21', 'buyer', 'tangerine@yahoo.es', 'Married', 'Man', ['Market developments', 'Videogames', 'Accesories'], true),
    new User ('cookiemonster', 'pass22', 'buyer', 'cookiemonster@gmail.com', 'Single', 'Man', ['Accesories'], true),
    new User ('bumblebee', 'pass23', 'admin', 'bumblebee@gmail.com', 'Single', 'Woman', ['Videogames', 'Accesories'], true),
    new User ('yojimbo', 'pass24', 'admin', 'yojimbo@gmail.com', 'Married', 'Other', ['Market developments', 'Videogames', 'Accesories'], true),
    new User ('orion', 'pass25', 'buyer', 'orion@yahoo.es', 'Divorced', 'Man', ['Accesories'], true),
    new User ('sweetpotato', 'pass26', 'buyer', 'sweetpotato@hotmail.com', 'Married', 'Woman', ['Videogames'], true)

  ];

  /**
   * Assing a Subject to the database to pass to the components
   */
  arrayUsers = new BehaviorSubject(this.dataBase);

  /**
   * Set the database as observable to monitorize the changes
   */
  public currentUsers = this.arrayUsers.asObservable();
  
  /**
   * FUnction to list the users in case necessary.
   * @returns array of user objects
   */
  getUsersList() {
    return this.dataBase;
  }

  /**
   * Pick up the changes and pass it to the components associated
   * @param newUser new user created to add to database 
   */
  changeArrayUsers(newUser: User[]){
    this.arrayUsers.next(newUser);
  }

  /**
   * Check the user and pass given in the login
   * @param arrayUser database connected to components
   * @param username string given by user
   * @param pass string given by user
   * @returns User object if found null if not or password incorrect
   */
  checkUser (arrayUser: Array<User>, username: string, pass: string): User {
      
    let user!: User;
    for (let i = 0; i<arrayUser.length; i++) {
      if (arrayUser[i].User === username && arrayUser[i].Pass === pass){
        user = arrayUser[i];
      }
    }
    return user;
    
  }



  // LOCALSTORAGE
  
  /**
   * Sets a localstorage of an object
   * @param value User object
   * @returns creation of a localstorage
   */
  setlocalStorage (value: User) { //Si lo pongo objecto User se queja
    localStorage.setItem('Userstorage', JSON.stringify(value));
  }

  /**
   * Retrieves localstorage setted
   * @param key object to save
   * @returns object of the localstorage
   */
  getlocalStorage (key: string): User {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

  /**
   * Remove a localstorage 
   * @param key name of the localstorage
   * @returns remove of thelocalstorage
   */
  removelocalStorage(key: string) {
    return localStorage.removeItem(key);
  }


  // COOKIES

  /**
   * Set a cookie calling cookies service
   * @param cookieName string of the name of the cookie
   * @param value to save int the cookie
   * @returns cookie setted
   */  
  setCookie(cookieName:string, value:string) {
    return this.myCookie.set(cookieName, value);
  }
  
  /**
   * Get the cookie once setted
   * @param cookieName the name of the cookie
   * @returns if exist the value of the cookie
   */
  getCookie(cookieName:string) {
    return this.myCookie.get(cookieName);
  }

  /**
   * Delete a cookie by name
   * @param cookieName name of the cookie to remove
   * @returns cookie removed
   */
  deleteCookie(cookieName:string){
    return this.myCookie.delete(cookieName);
  }
}

