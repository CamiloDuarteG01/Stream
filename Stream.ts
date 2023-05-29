import{Categoria}from "./Categoria";
export class Stream{
    private conjuntoDeCategoriaes:Categoria [];
 
    constructor(
        conjuntoDeCategoriaes: Categoria [] = []
      ) {
        this.conjuntoDeCategoriaes= conjuntoDeCategoriaes;
      }
     
      // Sobreescritura del constructor

    
      get ConjuntoDeCategoriaes(): Categoria{
        return this.ConjuntoDeCategoriaes;
      
      }
      
    
      set ConjuntoDeCategoriaes(e: Categoria) {
        this.ConjuntoDeCategoriaes = e;
      }
}