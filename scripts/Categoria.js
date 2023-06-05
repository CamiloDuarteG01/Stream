export class Categoria {
    constructor(nombre = '', imagenURL = '', descripcion = '') {
        this.nombre = nombre;
        this.imagenURL = imagenURL;
        this.descripcion = descripcion;
    }
    // Sobreescritura del constructor
    get Nombre() {
        return this.nombre;
    }
    get ImagenURL() {
        return this.imagenURL;
    }
    get Descripcion() {
        return this.descripcion;
    }
    set Nombre(e) {
        this.nombre = e;
    }
    set ImagenURL(e) {
        this.imagenURL = e;
    }
    set Descripcion(e) {
        this.descripcion = e;
    }
}
//# sourceMappingURL=Categoria.js.map