"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canales = void 0;
const Streamer_1 = require("./Streamer");
class Canales {
    constructor(nombre = '', bannerURL = '', nombreEstreamer = Streamer_1.Streamer, descripcionDetallada = '') {
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
exports.Canales = Canales;
//# sourceMappingURL=Canales.js.map