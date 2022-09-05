export class Usuario {
    private password: string;
    private username: string;


    constructor(private user: string, private pass: string) {
                this.password = pass;
                this.username = user;
}

    
}
