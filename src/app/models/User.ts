

export class User {

    #User!:string;
    #Pass!:string;
    #Rol!:string;
    #Mail!:string;
    #Status!:string;
    #Gender!:string;
    #Info!:string[];
    #Condi!:boolean;


    constructor (user:string, pass:string, rol:string, mail: string, status: string, gender: string, info: string[], condi: boolean) {
        this.#User = user;
        this.#Pass = pass;
        this.#Rol = rol;
        this.#Mail = mail;
        this.#Status = status;
        this.#Gender = gender;
        this.#Info = info;
        this.#Condi = condi;
    }

    get User () {
        return this.#User;
    }

    get Pass () {
        return this.#Pass;
    }

    get Rol () {
        return this.#Rol;
    }

    get Mail () {
        return this.#Mail;
    }

    get Status () {
        return this.#Status;
    }

    get Gender () {
        return this.#Gender;
    }

    get Info () {
        return this.#Info;
    }

    get Condi () {
        return this.#Condi;
    }

    set User(user) {
        this.#User = user;
    }

    set Pass(pass) {
        this.#Pass = pass;
    }

    set Rol(rol) {
        this.#Rol = rol;
    }

    set Mail(mail) {
        this.#Mail = mail;
    }

    set Status(status) {
        this.#Status = status;
    }

    set Gender(gender) {
        this.#Gender = gender;
    }

    set Info(info) {
        this.#Info = info;
    }

    set Condi(condi) {
        this.#Condi = condi;
    }
    
    getObject () {
        let myobject ={
         user: this.#User,
         pass: this.#Pass,
         rol: this.#Rol,
         mail: this.#Mail,
         status: this.#Status,
         gender: this.#Gender,
         info: this.#Info,
         condi: this.#Condi    
        }
        return myobject
    }


}