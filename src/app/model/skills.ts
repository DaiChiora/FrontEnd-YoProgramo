export class Skills {
    id: number;
    nombreHabilidad: string;
    porcentaje: number;

    constructor(nombreHabilidad: string, porcentaje: number) {
        this.nombreHabilidad = nombreHabilidad;
        this.porcentaje = porcentaje;
    }
}
