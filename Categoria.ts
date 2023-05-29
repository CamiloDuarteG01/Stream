
export class Categoria{
    private nombre: String;
    private descripcion:String;
    private imagenURL:String;
 
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
        return this.Nombre;
      }
      get ImagenURL(): string {
        return this.ImagenURL;
      }
      get Descripcion(): string {
        return this.Descripcion;
      }
     
      
      
    
      set Nombre(e: string) {
        this.nombre = e;
      }
      set  ImagenURL(e: string) {
        this.ImagenURL= e;
      }
      set Descripcion(e: string) {
        this.Descripcion = e;
      }
      
}