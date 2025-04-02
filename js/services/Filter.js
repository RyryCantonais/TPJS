import Provider from "./Provider.js";

export default class Filter {

    static async filterMobs() {
        const searchQuery = document.getElementById("search-bar").value.toLowerCase();
        const filteredMobs = await Provider.searchMobByName(searchQuery);

        const mobList = document.getElementById("mob-list");
        mobList.innerHTML = filteredMobs.map(mob => `
            <li>
                <a href="#/mobs/${mob.id}">${mob.name}</a>
            </li>
        `).join('');
    }

        static async filterItems() {
            const searchQuery = document.getElementById("search-bar").value.toLowerCase();
    
            // Utiliser les fonctions de recherche dans Provider
            const filteredArmors = await Provider.searchArmorByName(searchQuery);
            const filteredWeapons = await Provider.searchWeaponByName(searchQuery);
    
            // Mettre à jour les listes
            const armorList = document.getElementById("armor-list");
            const weaponList = document.getElementById("weapon-list");
    
            armorList.innerHTML = filteredArmors.map(armor => `
                <li>
                    <a href="#/armor/${armor.id}">${armor.name}</a>
                </li>
            `).join('');
    
            weaponList.innerHTML = filteredWeapons.map(weapon => `
                <li>
                    <a href="#/weapon/${weapon.id}">${weapon.name}</a>
                </li>
            `).join('');
        }

    }