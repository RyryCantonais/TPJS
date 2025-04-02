import Provider from '../../services/Provider.js';
import Favoris from '../../services/Favoris.js';

export default class AllFavoris {
    // Render la page contenant la liste de tout les favoris
    static async render() {
        const favoris = await Favoris.getFavoris();
        console.log(favoris);
        const Mobs = []
        const Weapons = []
        const Armors = []
        for (const favori of favoris.mobs) {
            const item = await Provider.getMob(favori.id);
            Mobs.push(item);
        }
        for (const favori of favoris.weapons) {
            const item = await Provider.getWeapon(favori.id);
            Weapons.push(item);
        }
        for (const favori of favoris.armors) {
            const item = await Provider.getArmor(favori.id);
            Armors.push(item);
        }
        console.log(Mobs);
        console.log(Weapons);
        console.log(Armors);

        return `
            <link rel="stylesheet" href="../../css/allfavoris.css">
            <h2>Tout les favoris</h2>
            <h3>Armures</h3>
            <ul>
                ${Armors.map(armors => `
                    <li>
                        <a href="#/armor/${armors.id}">${armors.name}</a>
                    </li>
                `).join('')}    
            </ul>
            <h3>Armes</h3>
            <ul>
                ${Weapons.map(weapons => `
                    <li>
                        <a href="#/weapon/${weapons.id}">${weapons.name}</a>
                    </li>
                `).join('')}    
            </ul>
            <h3>Mobs</h3>
            <ul>
                ${Mobs.map(mob => `
                    <li>
                        <a href="#/mobs/${mob.id}">${mob.name}</a>
                    </li>
                `).join('')}    
            </ul>
        `;
    }
    
}