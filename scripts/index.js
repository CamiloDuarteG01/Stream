import { Canal } from "./Canal.js";
import { Streamer } from "./Streamer.js";
let canal = new Canal('PpCanal', 'Pepe el mejor', 'PP01', 'En este canal se admiten a todos');
let streamer1 = new Streamer('PP01', ['yahoo', 'youtube'], "Este streamer tiene 20 años");
canal.setPropietario(streamer1.getNickname()); // Pasamos el objeto Streamer completo como propietario del canal
let a = canal.getPropietario(); // Obtenemos el nickname del propietario
if (a !== undefined) {
    streamer1.setMyCanal(canal); // Pasamos el objeto Canal completo al método setMyCanal
}
console.log(streamer1);
// en lo anterior se realizo una asociacion  de 1 a 1 entre  canal y streamer osea un canal tiene un streamer y un streamer tiene un canal.
//# sourceMappingURL=index.js.map