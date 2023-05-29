"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plataforma = void 0;
class Plataforma {
    constructor(nombre = '', logoURL = '', descripcion = '', empresaPatroconadora = '', conjuntoDeCanales = []) {
        this.nombre = nombre;
        this.logoURL = logoURL;
        this.descripcion = descripcion;
        this.empresaPatroconadora = empresaPatroconadora;
        this.conjuntoDeCanales = conjuntoDeCanales;
    }
    // Sobreescritura del constructor
    get Nombre() {
        return this.Nombre;
    }
    get LogoURL() {
        return this.LogoURL;
    }
    get Descripcion() {
        return this.Descripcion;
    }
    get EmpresaPatroconadora() {
        return this.EmpresaPatroconadora;
    }
    get ConjuntoDeCanales() {
        return this.ConjuntoDeCanales;
    }
    set Nombre(e) {
        this.nombre = e;
    }
    set LogoURL(e) {
        this.LogoURL = e;
    }
    set Descripcion(e) {
        this.Descripcion = e;
    }
    set EmpresaPatroconadora(e) {
        this.EmpresaPatroconadora = e;
    }
    set ConjuntoDeCanales(e) {
        this.ConjuntoDeCanales = e;
    }
}
exports.Plataforma = Plataforma;
//# sourceMappingURL=Plataforma.js.map