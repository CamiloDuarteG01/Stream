export class Streamer {
    constructor(nickname = '', listaDeRedesSociales = [], descripcion = '', myCanal) {
        this.nickname = nickname;
        this.listaDeRedesSociales = listaDeRedesSociales;
        this.descripcion = descripcion;
        this.myCanal = myCanal;
    }
    getNickname() {
        return this.nickname;
    }
    getListaDeRedesSociales() {
        return this.listaDeRedesSociales;
    }
    getDescripcion() {
        return this.descripcion;
    }
    setNickname(nickname) {
        this.nickname = nickname;
    }
    setListaDeRedesSociales(listaDeRedesSociales) {
        this.listaDeRedesSociales = listaDeRedesSociales;
    }
    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
    getMyCanal() {
        return this.myCanal;
    }
    setMyCanal(canal) {
        this.myCanal = canal;
    }
}
//# sourceMappingURL=Streamer.js.map