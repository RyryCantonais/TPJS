import Provider from "./Provider.js";

export default class JSDetailMob {

    static async equipItem(id) {
        const parts = id.split('_');
        if (parts.length === 1) {
            parts.push(parts[0]);
        }
        const [XXX, YYY] = parts;
        console.log("Équipement :", XXX, YYY);
    
        let item = null;
        let cellId = null;
        let statType = null;
    
        switch(YYY) {
            case "helmet":
                cellId = "EHelmet";
                statType = "def-stat";
                item = await Provider.getArmor(id);
                break;
            case "chestplate":
                cellId = "EChestplate";
                statType = "def-stat";
                item = await Provider.getArmor(id);
                break;
            case "leggings":
                cellId = "ELeggings";
                statType = "def-stat";
                item = await Provider.getArmor(id);
                break;
            case "boots":
                cellId = "EBoots";
                statType = "def-stat";
                item = await Provider.getArmor(id);
                break;
            case "sword":
            case "axe":
            case "bow":
            case "crossbow":
                cellId = "EWeapons";
                statType = "dmg-stat";
                item = await Provider.getWeapon(id);
                break;
            default:
                return;
        }
    
        let cell = document.getElementById(cellId);
        if (!cell) return;
    
        if (cell.innerHTML !== "None") {
            const previousItemId = cell.getAttribute("data-item-id");
            if (previousItemId) {
                await this.unequipItem(previousItemId);
            }
        }
    
        console.log("Nouvel équipement :", item);
        cell.innerHTML = `<img src="${item.image_url}" onclick="JSDetailMob.unequipItem('${item.id}')" style="width: 50px; height: 50px;">`;
        cell.setAttribute("data-item-id", item.id);
        this.updateStats(statType, item.defense || item.attack);
    }

    static async unequipItem(id) {
        const parts = id.split('_');
        if (parts.length === 1) {
            parts.push(parts[0]);
        }
        const [XXX, YYY] = parts;
        console.log("Déséquipement :", XXX, YYY);

        let item = null;
        let cellId = null;
        let statType = null;

        switch(YYY) {
            case "helmet":
                cellId = "EHelmet";
                statType = "def-stat";
                item = await Provider.getArmor(id);
                break;
            case "chestplate":
                cellId = "EChestplate";
                statType = "def-stat";
                item = await Provider.getArmor(id);
                break;
            case "leggings":
                cellId = "ELeggings";
                statType = "def-stat";
                item = await Provider.getArmor(id);
                break;
            case "boots":
                cellId = "EBoots";
                statType = "def-stat";
                item = await Provider.getArmor(id);
                break;
            case "sword":
            case "axe":
            case "bow":
            case "crossbow":
                cellId = "EWeapons";
                statType = "dmg-stat";
                item = await Provider.getWeapon(id);
                break;
            default:
                return;
        }

        let cell = document.getElementById(cellId);
        if (!cell) return;

        console.log("Suppression de :", item);
        cell.innerHTML = `None`;
        cell.removeAttribute("data-item-id");
        this.updateStats(statType, -(item.defense || item.attack));
    }

    static updateStats(stat, value) {
        const statElement = document.getElementById(stat);
        const currentStat = parseInt(statElement.innerHTML) || 0;
        statElement.innerHTML = currentStat + value;
    }
}
