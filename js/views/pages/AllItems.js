import Provider from "../../services/Provider.js";

export default class AllItems{
    static async render(){
        const armors = await Provider.getArmors();
        const weapons = await Provider.getWeapons();
        console.log(armors);
        console.log(weapons);
        return `
            <h2>Tout les items</h2>
            <h3>Armures</h3>
            <ul>
                ${armors.map(armors => `
                    <li>
                        <a href="#/mobs/${armors.id}">${armors.name}</a>
                    </li>
                `).join('')}    
            </ul>
            <h3>Armes</h3>
            <ul>
                ${weapons.map(weapons => `
                    <li>
                        <a href="#/mobs/${weapons.id}">${weapons.name}</a>
                    </li>
                `).join('')}    
            </ul>
        `;
    }
}