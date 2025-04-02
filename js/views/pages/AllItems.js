import Provider from "../../services/Provider.js";
import Filter from "../../services/Filter.js";

export default class AllItems {
    // Render la page contenant la liste de tout les items équipables
    static async render() {
        const armors = await Provider.getAllArmors();
        const weapons = await Provider.getAllWeapons();
        window.Filter = Filter;

        // Inject HTML avec un champ de recherche
        return `
            <link rel="stylesheet" href="../../css/allitems.css">
            <h2>Tout les items</h2>
            <input type="text" id="search-bar" placeholder="Rechercher un item..." oninput="Filter.filterItems()">
            <h3>Armures</h3>
            <ul id="armor-list">
                ${armors.map(armor => `
                    <li>
                        <a href="#/armor/${armor.id}">${armor.name}</a>
                    </li>
                `).join('')}
            </ul>
            <h3>Armes</h3>
            <ul id="weapon-list">
                ${weapons.map(weapon => `
                    <li>
                        <a href="#/weapon/${weapon.id}">${weapon.name}</a>
                    </li>
                `).join('')}
            </ul>
        `;
    }
}