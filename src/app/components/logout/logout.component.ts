import { Component} from '@angular/core';
import { Route, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor (private myCookie: CookieService, private serviceUsers: UsersService, private router: Router){ }


  logout () {
    this.router.navigateByUrl('/login');
    this.myCookie.delete('Usercookie');
    localStorage.removeItem('username');
  }

}
