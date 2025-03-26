import Provider from "../../services/Provider.js";

export default class AllMobs{
    static async render(){
        const mobs = await Provider.getAllMobs();
        console.log(mobs);
        return `
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