

export class Events {

    #Name!: string;
    #Type!: string;
    #Date!: Date;
    #Place!:string;
    #Price!: number;

    constructor (name: string, type: string, date: Date, place: string, price: number) {
        this.#Name = name;
        this.#Type = type;
        this.#Date = date;
        this.#Place = place;
        this.#Price = price;
    }

    get Name () {
        return this.#Name;
    }

    get Type () {
        return this.#Type;
    }

    get Date () {
        return this.#Date;
    }

    get Place () {
        return this.#Place;
    }

    get Price () {
        return this.#Price;
    }

    set Name (name:string) {
        this.#Name = name;
    }

    set Type (type: string){
        this.#Type = type;
    }

    set Date (date: Date){
        this.#Date = date;
    }

    set Place (place: string) {
        this.#Place = place;
    }

    set Price (price: number) {
        this.#Price = price;
    }
}