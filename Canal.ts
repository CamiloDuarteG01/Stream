import { Streamer } from "./Streamer.js";

export class Canal {
  private nombre: string;
  private bannerURL: string;
  private nombreEstreamer: string;
  private descripcionDetallada: string;
  private propietario?: string;

  constructor(
    nombre: string = '',
    bannerURL: string = '',
    nombreEstreamer: string = '',
    descripcionDetallada: string = '',
    datosPropietario?: string
  ) {
    this.nombre = nombre;
    this.bannerURL = bannerURL;
    this.nombreEstreamer = nombreEstreamer;
    this.descripcionDetallada = descripcionDetallada;
    this.propietario = datosPropietario;
  }


     
      // Sobreescritura del constructor

      getNombre(): string {
        return this.nombre;
      }
      getBannerURL(): string {
        return this.bannerURL;
      }
      getNombreEstreamer():string{
        return this.nombreEstreamer;
      }
      getDescripcionDetallada(): string {
        return this.descripcionDetallada;
      }
 
      
    
      setNombre(e: string) {
        this.nombre = e;
      }
      setBannerURL(e: string) {
        this.bannerURL= e;
      }
      setNombreEstreamer(e: string) {
        this.nombreEstreamer = e;
      }
      setDescripcionDetallada(e: string) {
        this.descripcionDetallada = e;
      }
      getPropietario(): string | undefined {
        return this.propietario;
      }
    
      setPropietario(nuevoPropietario: string): void {
        this.propietario = nuevoPropietario;
      }
}