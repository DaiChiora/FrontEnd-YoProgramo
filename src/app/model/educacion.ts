export class Educacion{
    idEdu?: number;
    tituloEdu: string;
    fechaEdu: number;
    descEdu: string;
    imgEdu: string;

    constructor(idEdu: number, tituloEdu: string, fechaEdu: number, descEdu: string, imgEdu: string) {
        
        this.tituloEdu = tituloEdu;
        this.fechaEdu = fechaEdu;
        this.descEdu = descEdu;
        this.imgEdu = imgEdu;}
}