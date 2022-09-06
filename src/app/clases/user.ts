export class User {
    private login:string;
    private email:string;
    private firstName: string;
    private activated: boolean;
    private authorities: string;
    private pass: string;

    constructor(login:string, email:string, firstName:string, activated:boolean, authorities:string, pass:string){
        this.login = login;
        this.email = email;
        this.firstName = firstName;
        this.activated = activated;
        this.authorities = authorities;
        this.pass = pass;
    }







}
