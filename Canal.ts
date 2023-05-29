import { Streamer } from "./Streamer";
export class Canal{
    private nombre: String;
    private bannerURL: String;
    private nombreEstreamer:Streamer;
    private descripcionDetallada:String;
  
 
    constructor(
        nombre: string = '',
        bannerURL: string = '',
        nombreEstreamer: Streamer ,
        descripcionDetallada: string = '',
   
      ) {
        this.nombre = nombre;
        this.bannerURL = bannerURL;
        this.nombreEstreamer = nombreEstreamer;
        this.descripcionDetallada = descripcionDetallada;
     
      }
     
      // Sobreescritura del constructor

      get Nombre(): string {
        return this.Nombre;
      }
      get BannerURL(): string {
        return this.BannerURL;
      }
      get NombreEstreamer(): Streamer {
        return this.NombreEstreamer;
      }
      get DescripcionDetallada(): string {
        return this.DescripcionDetallada;
      }
 
      
    
      set Nombre(e: string) {
        this.nombre = e;
      }
      set  BannerURL(e: string) {
        this.BannerURL= e;
      }
      set NombreEstreamer(e: Streamer) {
        this.NombreEstreamer = e;
      }
      set DescripcionDetallada(e: string) {
        this.DescripcionDetallada = e;
      }
     
}