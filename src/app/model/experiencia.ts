export class Experiencia{
    idExp?: number;
    tituloExp: string;
    fechaExp: number;
    descExp: string;
    imgExp: string;

    constructor(tituloExp: string, fechaExp: number, descExp: string, imgExp: string){
        this.tituloExp = tituloExp;
        this.fechaExp = fechaExp;
        this.descExp = descExp;
        this.imgExp = imgExp;
    }
}