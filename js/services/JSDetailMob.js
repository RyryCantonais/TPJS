import Provider from "./Provider.js";

export default class JSDetailMob {

    //Equiper un item selon son ID
    static async equipItem(id) {
        const parts = id.split('_'); //Découpe l'ID en deux parties
        // Si l'ID ne contient qu'une seule partie, on la duplique pour éviter les erreurs
        if (parts.length === 1) {
            parts.push(parts[0]);
        }
        const [XXX, YYY] = parts;
        console.log("Équipement :", XXX, YYY);
    
        let item = null;
        let cellId = null;
        let statType = null;
    
        switch(YYY) {  // On vérifie le type d'équipement et on définit la cellule et le type de statistique à mettre à jour
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
        // On vérifie si l'élément existe dans le DOM
        // Si l'élément n'existe pas, on ne fait rien
        let cell = document.getElementById(cellId);
        if (!cell) return;
    
        // On vérifie si l'élément a déjà un équipement
        // Si c'est le cas, on le déséquipe avant d'équiper le nouvel équipement
        if (cell.innerHTML !== "None") {
            const previousItemId = cell.getAttribute("data-item-id");
            if (previousItemId) {
                await this.unequipItem(previousItemId);
            }
        }
        
        // On équipe le nouvel équipement
        // On ajoute l'image de l'équipement dans la cellule correspondante
        console.log("Nouvel équipement :", item);
        cell.innerHTML = `<img src="${item.image_url}" onclick="JSDetailMob.unequipItem('${item.id}')" style="width: 50px; height: 50px;">`;
        cell.setAttribute("data-item-id", item.id);
        this.updateStats(statType, item.defense || item.attack);
    }

    //Déséquiper un item selon son ID
    // On utilise la même logique que pour l'équipement
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

        switch(YYY) { // On vérifie le type d'équipement et on définit la cellule et le type de statistique à mettre à jour
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

        // On vérifie si l'élément existe dans le DOM
        // Si l'élément n'existe pas, on ne fait rien
        let cell = document.getElementById(cellId);
        if (!cell) return;

        // On vérifie si l'élément a un équipement
        // Si c'est le cas, on le déséquipe
        console.log("Suppression de :", item);
        cell.innerHTML = `None`;
        cell.removeAttribute("data-item-id");
        this.updateStats(statType, -(item.defense || item.attack));
    }

    //Mettre à jour les statistiques à chaque fois qu'un équipement est équipé ou déséquipé
    static updateStats(stat, value) {
        const statElement = document.getElementById(stat);
        const currentStat = parseInt(statElement.innerHTML) || 0;
        statElement.innerHTML = currentStat + value;
    }
}
