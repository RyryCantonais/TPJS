import Provider from "../../services/Provider.js";

export default class AllMobs{
    // Render la page contenant la liste de tout les mobs
    static async render(){
        const mobs = await Provider.getAllMobs();
        console.log(mobs);
        return `
            <link rel="stylesheet" href="../../css/allmobs.css">
            <h2>All Mobs</h2>
            <ul>
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