import Provider from "../../services/Provider.js";
import Favoris from "../../services/Favoris.js";

export default class DetailWeapon{
    // Render la page contenant les détails d'une arme
    static async render(id){
        const weapons = await Provider.getWeapon(id);
        console.log(weapons);
        window.Favoris = Favoris;
        
        return `
            <link rel="stylesheet" href="../../css/detailweapons.css">
            <h2>${weapons.name}</h2>
            <p>${weapons.description}</p>
            <img src="${weapons.image_url}" alt="${weapons.name}" style="max-width: 100%; height: auto;">
            <button id="favorites-button" onclick="Favoris.addWeapon('${weapons.id}')">
            ${Favoris.isFavorite(weapons.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            </button>
            <table>
                <tr>
                    <th>Damage</th>
                </tr>
                <tr>
                    <td>${weapons.attack}</td>
                </tr>
            </table>
        `;
    }
}