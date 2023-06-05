export class Canal {
    constructor(nombre = '', bannerURL = '', nombreEstreamer = '', descripcionDetallada = '', datosPropietario) {
        this.nombre = nombre;
        this.bannerURL = bannerURL;
        this.nombreEstreamer = nombreEstreamer;
        this.descripcionDetallada = descripcionDetallada;
        this.propietario = datosPropietario;
    }
    // Sobreescritura del constructor
    getNombre() {
        return this.nombre;
    }
    getBannerURL() {
        return this.bannerURL;
    }
    getNombreEstreamer() {
        return this.nombreEstreamer;
    }
    getDescripcionDetallada() {
        return this.descripcionDetallada;
    }
    setNombre(e) {
        this.nombre = e;
    }
    setBannerURL(e) {
        this.bannerURL = e;
    }
    setNombreEstreamer(e) {
        this.nombreEstreamer = e;
    }
    setDescripcionDetallada(e) {
        this.descripcionDetallada = e;
    }
    getPropietario() {
        return this.propietario;
    }
    setPropietario(nuevoPropietario) {
        this.propietario = nuevoPropietario;
    }
}
//# sourceMappingURL=Canal.js.map