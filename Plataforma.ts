import{Canal}from "./Canal";
export class Plataforma{
    private nombre: String;
    private logoURL: String;
    private descripcion:String;
    private empresaPatroconadora:String;
    private conjuntoDeCanales:Canal [];
 
    constructor(
        nombre: string = '',
        logoURL: string = '',
        descripcion: string = '',
        empresaPatroconadora: string = '',
        conjuntoDeCanales: Canal [] = []
      ) {
        this.nombre = nombre;
        this.logoURL = logoURL;
        this.descripcion = descripcion;
        this.empresaPatroconadora = empresaPatroconadora;
        this.conjuntoDeCanales= conjuntoDeCanales;
      }
     
      // Sobreescritura del constructor

      get Nombre(): string {
        return this.Nombre;
      }
      get LogoURL(): string {
        return this.LogoURL;
      }
      get Descripcion(): string {
        return this.Descripcion;
      }
      get EmpresaPatroconadora(): string {
        return this.EmpresaPatroconadora;
      }
      
      get ConjuntoDeCanales(): Canal{
        return this.ConjuntoDeCanales;
      
      }
      
    
      set Nombre(e: string) {
        this.nombre = e;
      }
      set  LogoURL(e: string) {
        this.LogoURL= e;
      }
      set Descripcion(e: string) {
        this.Descripcion = e;
      }
      set EmpresaPatroconadora(e: string) {
        this.EmpresaPatroconadora = e;
      }
      set ConjuntoDeCanales(e: Canal) {
        this.ConjuntoDeCanales = e;
      }
}