
export class Streamer{
    private nickname: String;
    private descripcion:String;
    private listaDeRedesSociales:String [];
 
    constructor(
        nickname: string = '',
        listaDeRedesSociales: string []= [],
        descripcion: string = ''
      ) {
        this.nickname = nickname;
        this.listaDeRedesSociales = listaDeRedesSociales;
        this.descripcion = descripcion;
      }
     
      // Sobreescritura del constructor

      get Nickname(): string {
        return this.Nickname;
      }
      get ListaDeRedesSociales(): string {
        return this.ListaDeRedesSociales;
      }
      get Descripcion(): string {
        return this.Descripcion;
      }
     
      
      
    
      set Nickname(e: string) {
        this.Nickname = e;
      }
      set  ListaDeRedesSociales(e: string) {
        this.ListaDeRedesSociales= e;
      }
      set Descripcion(e: string) {
        this.Descripcion = e;
      }
      
}