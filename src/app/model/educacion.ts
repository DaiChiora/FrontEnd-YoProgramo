export class Educacion{
    idEdu?: number;
    tituloEdu: string;
    fechaEdu: string;
    descEdu: string;
    imgEdu: string;

    constructor(tituloEdu: string, fechaEdu: string, descEdu: string, imgEdu: string) {
        
        this.tituloEdu = tituloEdu;
        this.fechaEdu = fechaEdu;
        this.descEdu = descEdu;
        this.imgEdu = imgEdu;}
}