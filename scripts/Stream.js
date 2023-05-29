"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stream = void 0;
class Stream {
    constructor(conjuntoDeCategoriaes = []) {
        this.conjuntoDeCategoriaes = conjuntoDeCategoriaes;
    }
    // Sobreescritura del constructor
    get ConjuntoDeCategoriaes() {
        return this.ConjuntoDeCategoriaes;
    }
    set ConjuntoDeCategoriaes(e) {
        this.ConjuntoDeCategoriaes = e;
    }
}
exports.Stream = Stream;
//# sourceMappingURL=Stream.js.map