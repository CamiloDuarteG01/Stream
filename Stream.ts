import { Categoria } from "./Categoria.js";

export class Stream {
    private conjuntoDeCategorias?: Categoria[];

    constructor(
        conjuntoDeCategorias: Categoria[] = []
    ) {
        this.conjuntoDeCategorias = conjuntoDeCategorias;
    }

    get ConjuntoDeCategorias(): Categoria[] | undefined {
        return this.conjuntoDeCategorias;
    }

    set ConjuntoDeCategorias(e: Categoria[]| undefined ) {
        this.conjuntoDeCategorias = e;
    }
}
