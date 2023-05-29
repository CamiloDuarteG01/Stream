"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
class Categoria {
    constructor(nombre = '', imagenURL = '', descripcion = '') {
        this.nombre = nombre;
        this.imagenURL = imagenURL;
        this.descripcion = descripcion;
    }
    // Sobreescritura del constructor
    get Nombre() {
        return this.Nombre;
    }
    get ImagenURL() {
        return this.ImagenURL;
    }
    get Descripcion() {
        return this.Descripcion;
    }
    set Nombre(e) {
        this.nombre = e;
    }
    set ImagenURL(e) {
        this.ImagenURL = e;
    }
    set Descripcion(e) {
        this.Descripcion = e;
    }
}
exports.Categoria = Categoria;
//# sourceMappingURL=Categoria.js.map