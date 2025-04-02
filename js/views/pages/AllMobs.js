import Provider from "../../services/Provider.js";
import Filter from "../../services/Filter.js";

export default class AllMobs {
    // Render la page contenant la liste de tout les mobs
    static async render() {
        const mobs = await Provider.getAllMobs();
        window.Filter = Filter;
        console.log(mobs);

        return `
            <link rel="stylesheet" href="../../css/allmobs.css">
            <h2>All Mobs</h2>
            <input type="text" id="search-bar" placeholder="Rechercher un mob..." oninput="Filter.filterMobs()">
            <ul id="mob-list">
                ${mobs.map(mob => `
                    <li>
                        <a href="#/mobs/${mob.id}">${mob.name}</a>
                    </li>
                `).join('')}    
            </ul>

            <h2>All Items</h2>
            <a href="#/items">All items</a>
        `;
    }
}