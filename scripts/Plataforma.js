export class Plataforma {
    constructor(nombre = '', logoURL = '', descripcion = '', empresaPatroconadora = '', conjuntoDeCanales = []) {
        this.nombre = nombre;
        this.logoURL = logoURL;
        this.descripcion = descripcion;
        this.empresaPatroconadora = empresaPatroconadora;
        this.conjuntoDeCanales = conjuntoDeCanales;
    }
    get Nombre() {
        return this.nombre;
    }
    get LogoURL() {
        return this.logoURL;
    }
    get Descripcion() {
        return this.descripcion;
    }
    get EmpresaPatroconadora() {
        return this.empresaPatroconadora;
    }
    get ConjuntoDeCanales() {
        return this.conjuntoDeCanales;
    }
    set Nombre(e) {
        this.nombre = e;
    }
    set LogoURL(e) {
        this.logoURL = e;
    }
    set Descripcion(e) {
        this.descripcion = e;
    }
    set EmpresaPatroconadora(e) {
        this.empresaPatroconadora = e;
    }
    set ConjuntoDeCanales(e) {
        this.conjuntoDeCanales = e;
    }
}
//# sourceMappingURL=Plataforma.js.map