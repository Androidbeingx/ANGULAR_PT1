import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Events } from 'src/app/models/Events';
import { User } from 'src/app/models/User';
import { EventsService } from 'src/app/services/events.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-listevents',
  templateUrl: './listevents.component.html',
  styleUrls: ['./listevents.component.css']
})
export class ListeventsComponent implements OnInit{
  
  listEvents!: Events[];

  p!: number;
  total!: number;

  //filtrar
  filterEvents!: Events[];
  locfilter!: string;
  pricefilter!: number;
  pagefilter!: number;

   

  constructor (private myEvents: EventsService, private myCookie: CookieService, private Userservice: UsersService) {

  }
  
  user!: User; 
  userrol!:string;
  
  
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("username") || '{}');
    this.userrol = JSON.parse(localStorage.getItem("role") || '{}');
    this.listEvents= this.myEvents.createEvents();
    this.total= 10;
    this.p = 1;
    //console.log(this.listEvents);

    this.filterEvents = this.listEvents;
    this.locfilter="";
    this.pricefilter=50;
      
    
  }
  

  filterinput () {

    console.log(this.locfilter)

    this.filterEvents = this.listEvents.filter(value => {
      if(value.Place.indexOf(this.locfilter.toUpperCase()) != -1) {
        if(value.Price <= this.pricefilter)
          return true;
      }
      return false; 
    });
  }

  pageFilter () {
    console.log(this.pagefilter)
    this.total = this.pagefilter;
  }

  deleteObject (event: Events) {
    let indexEvent =  this.filterEvents.indexOf(event);
    this.filterEvents.splice(indexEvent, 1)
  }

 

}
