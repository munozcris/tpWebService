export class Pais {
    nombre: string;
    confirmados: string;
    recuperados: string;
    fallecidos:string;
    bandera: string;

    constructor(nombre?: string, confirmados?: string, recuperados?: string, fallecidos?:string, bandera?: string){
        this.nombre= nombre;
        this.confirmados = confirmados;
        this.recuperados = recuperados;
        this.fallecidos = fallecidos;
        this.bandera = bandera;
    }
}
