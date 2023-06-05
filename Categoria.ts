
export class Categoria{
    private nombre: string;
    private descripcion:string;
    private imagenURL:string;
 
    constructor(
        nombre: string = '',
        imagenURL: string = '',
        descripcion: string = ''
      ) {
        this.nombre = nombre;
        this.imagenURL = imagenURL;
        this.descripcion = descripcion;
      }
     
      // Sobreescritura del constructor

      get Nombre(): string {
        return this.nombre;
      }
      get ImagenURL(): string {
        return this.imagenURL;
      }
      get Descripcion(): string {
        return this.descripcion;
      }
     
      
      
    
      set Nombre(e: string) {
        this.nombre = e;
      }
      set  ImagenURL(e: string) {
        this.imagenURL= e;
      }
      set Descripcion(e: string) {
        this.descripcion = e;
      }
      
}