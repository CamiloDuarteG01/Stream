import { Canal } from "./Canal.js";

export class Plataforma {
    private nombre: string;
    private logoURL: string;
    private descripcion: string;
    private empresaPatroconadora: string;
    private conjuntoDeCanales?: Canal[];

    constructor(
        nombre: string = '',
        logoURL: string = '',
        descripcion: string = '',
        empresaPatroconadora: string = '',
        conjuntoDeCanales: Canal[] = []
    ) {
        this.nombre = nombre;
        this.logoURL = logoURL;
        this.descripcion = descripcion;
        this.empresaPatroconadora = empresaPatroconadora;
        this.conjuntoDeCanales = conjuntoDeCanales;
    }

    get Nombre(): string {
        return this.nombre;
    }

    get LogoURL(): string {
        return this.logoURL;
    }

    get Descripcion(): string {
        return this.descripcion;
    }

    get EmpresaPatroconadora(): string {
        return this.empresaPatroconadora;
    }

    get ConjuntoDeCanales(): Canal[] | undefined {
        return this.conjuntoDeCanales;
    }

    set Nombre(e: string) {
        this.nombre = e;
    }

    set LogoURL(e: string) {
        this.logoURL = e;
    }

    set Descripcion(e: string) {
        this.descripcion = e;
    }

    set EmpresaPatroconadora(e: string) {
        this.empresaPatroconadora = e;
    }

    set ConjuntoDeCanales(e: Canal[] |undefined) {
        this.conjuntoDeCanales = e;
    }
}
