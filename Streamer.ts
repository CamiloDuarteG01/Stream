import { Canal } from "./Canal.js";

export class Streamer {
    private nickname: string;
    private descripcion?: string | undefined;
    private listaDeRedesSociales?: string[] | undefined;
    private myCanal?: Canal | undefined;

    constructor(
        nickname: string = '',
        listaDeRedesSociales: string[] = [],
        descripcion: string = '',
        myCanal?: Canal | undefined
    ) {
        this.nickname = nickname;
        this.listaDeRedesSociales = listaDeRedesSociales;
        this.descripcion = descripcion;
        this.myCanal = myCanal;
    }

    getNickname(): string {
        return this.nickname;
    }

    getListaDeRedesSociales(): string[] | undefined {
        return this.listaDeRedesSociales;
    }

    getDescripcion(): string | undefined {
        return this.descripcion;
    }

    setNickname(nickname: string) {
        this.nickname = nickname;
    }

    setListaDeRedesSociales(listaDeRedesSociales: string[]) {
        this.listaDeRedesSociales = listaDeRedesSociales;
    }

    setDescripcion(descripcion: string) {
        this.descripcion = descripcion;
    }

    getMyCanal(): Canal | undefined {
        return this.myCanal;
    }

    setMyCanal(canal: Canal): void {
        this.myCanal = canal;
    }
}
