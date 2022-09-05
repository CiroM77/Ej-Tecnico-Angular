export class Categoria {
    private id:number;
    private nombre:string;
    private establecimientos:string;

    
    constructor(id: number, nombre:string,  establecimientos: string) {
        this.id = id;
        this.nombre = nombre;
        this.establecimientos = establecimientos;
}
}
