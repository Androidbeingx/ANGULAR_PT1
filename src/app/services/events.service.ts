import { Injectable } from '@angular/core';
import { Events } from '../models/Events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  createEvents(): Events[]{

    let listEvents: Events[] = [];
    
    let names: string[] = [
      "Avatar 2",
      "Els pets",
      "Circ du Soleil",
      "Escape room",
      "Show cooking",
      "Cybersecurity fair"  
    ] 
    
    let types: string[] = ["Cinema", "Concert", "Museum",  "Fair" ]

    let dates: Date[] = [ new Date("2023-05-21"), new Date("2024-01-14"), new Date("2023-08-17"), new Date("2023-06-19"), new Date("2022-03-30"), new Date("2023-09-25")]

    let location: string[] = ["BARCELONA", "MADRID", "BILBAO", "GIRONA" ]

    let prices: number[] = [25, 80, 35, 21, 15, 38, 40]

    for(let j=0;j<100;j++){
      let name: string = names[Math.floor(Math.random()*names.length)];
      let type: string = types[Math.floor(Math.random()*types.length)];
      let date: Date = dates[Math.floor(Math.random()*dates.length)];
      let place: string = location[Math.floor(Math.random()*location.length)];
      let price: number = prices[Math.floor(Math.random()*prices.length)];

      listEvents.push(new Events(name,type,date,place,price));
    }

    return listEvents;
  }
}
