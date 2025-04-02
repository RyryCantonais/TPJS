import Provider from "../../services/Provider.js";
import Favoris from "../../services/Favoris.js";

export default class DetailsArmor{
    // Render la page contenant les détails d'une armure 
    static async render(id){
        const armors = await Provider.getArmor(id);
        console.log(armors);
        window.Favoris = Favoris;
        return `
            <link rel="stylesheet" href="../../css/detailsarmor.css">
            <h2>${armors.name}</h2>
            <p>${armors.description}</p>
            <img src="${armors.image_url}" alt="${armors.name}" style="max-width: 100%; height: auto;">
            <button id="favorites-button" onclick="Favoris.addArmor('${armors.id}')">
            ${Favoris.isFavorite(armors.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            </button>
            <table>
                <tr>
                    <th>Defense</th>
                </tr>
                <tr>
                    <td>${armors.defense}</td>
                </tr>
            </table>
        `;
    }
}