

export class User {

    #user!:string;
    #pass!:string;
    #rol!:string;
    #mail!:string;
    #estado!:string;
    #sexo!:string;
    #info!:string[];
    #condi!:boolean;


    constructor (user:string, pass:string, rol:string, mail:string, estado:string, sexo:string, info:string[], condi:boolean) {
        this.#user = user;
        this.#pass = pass;
        this.#rol = rol;
        this.#mail = mail;
        this.#estado = estado;
        this.#sexo = user;
        this.#info = info;
        this.#condi = condi;
    }


    get user () {
        return this.#user;
    }

    get pass () {
        return this.#pass;
    }

    get rol () {
        return this.#rol;
    }

    get mail () {
        return this.#mail;
    }

    get estado () {
        return this.#estado;
    }

    get sexo () {
        return this.#sexo;
    }

    get info () {
        return this.#info;
    }

    get condi () {
        return this.#condi;
    }

    set user(user) {
        this.#user = user;
    }

    set pass(pass) {
        this.#pass = pass;
    }

    set rol(rol) {
        this.#rol = rol;
    }

    set mail(mail) {
        this.#mail = mail;
    }

    set estado(estado) {
        this.#estado = estado;
    }

    set sexo(sexo) {
        this.#sexo = sexo;
    }

    set info(info) {
        this.#info = info;
    }

    set condi(condi) {
        this.#condi = condi;
    }

}