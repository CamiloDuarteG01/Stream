"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canal = void 0;
class Canal {
    constructor(nombre = '', bannerURL = '', nombreEstreamer, descripcionDetallada = '') {
        this.nombre = nombre;
        this.bannerURL = bannerURL;
        this.nombreEstreamer = nombreEstreamer;
        this.descripcionDetallada = descripcionDetallada;
    }
    // Sobreescritura del constructor
    get Nombre() {
        return this.Nombre;
    }
    get BannerURL() {
        return this.BannerURL;
    }
    get NombreEstreamer() {
        return this.NombreEstreamer;
    }
    get DescripcionDetallada() {
        return this.DescripcionDetallada;
    }
    set Nombre(e) {
        this.nombre = e;
    }
    set BannerURL(e) {
        this.BannerURL = e;
    }
    set NombreEstreamer(e) {
        this.NombreEstreamer = e;
    }
    set DescripcionDetallada(e) {
        this.DescripcionDetallada = e;
    }
}
exports.Canal = Canal;
//# sourceMappingURL=Canal.js.map