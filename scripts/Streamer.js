"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Streamer = void 0;
class Streamer {
    constructor(nickname = '', listaDeRedesSociales = [], descripcion = '') {
        this.nickname = nickname;
        this.listaDeRedesSociales = listaDeRedesSociales;
        this.descripcion = descripcion;
    }
    // Sobreescritura del constructor
    get Nickname() {
        return this.Nickname;
    }
    get ListaDeRedesSociales() {
        return this.ListaDeRedesSociales;
    }
    get Descripcion() {
        return this.Descripcion;
    }
    set Nickname(e) {
        this.Nickname = e;
    }
    set ListaDeRedesSociales(e) {
        this.ListaDeRedesSociales = e;
    }
    set Descripcion(e) {
        this.Descripcion = e;
    }
}
exports.Streamer = Streamer;
//# sourceMappingURL=Streamer.js.map