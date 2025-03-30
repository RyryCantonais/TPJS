import Provider from "./Provider.js";

export default class JSDetailMob {

    static async equipItem(id){
        const parts = id.split('_');
        if (parts.length === 1) {
            parts.push(parts[0]);
        }
        const [XXX, YYY] = parts;
        console.log(XXX, YYY);

        let item = null;
        let table = document.getElementById("itemTable");
        let row = null;
        let cell = null;

        switch(YYY){
            case "helmet":
                row = table.rows[0];
                cell = row.cells[0];
                item = await Provider.getArmor(id);
                console.log(item);
                cell.innerHTML = `<img src="${item.image_url}" onclick="JSDetailMob.unequipItem('${item.id}')" style="width: 50px; height: 50px;">`;
                this.updateStats("def-stat", item.defense);
                break;
            case "chestplate":
                row = table.rows[1];
                cell = row.cells[0];
                item = await Provider.getArmor(id);
                console.log(item);
                cell.innerHTML = `<img src="${item.image_url}" onclick="JSDetailMob.unequipItem('${item.id}')" style="width: 50px; height: 50px;">`;
                this.updateStats("def-stat", item.defense);
                break;
            case "leggings":
                row = table.rows[2];
                cell = row.cells[0];
                item = await Provider.getArmor(id);
                console.log(item);
                cell.innerHTML = `<img src="${item.image_url}" onclick="JSDetailMob.unequipItem('${item.id}')" style="width: 50px; height: 50px;">`;
                this.updateStats("def-stat", item.defense);
                break;
            case "boots":
                row = table.rows[3];
                cell = row.cells[0];
                item = await Provider.getArmor(id);
                console.log(item);
                cell.innerHTML = `<img src="${item.image_url}" onclick="JSDetailMob.unequipItem('${item.id}')" style="width: 50px; height: 50px;">`;
                this.updateStats("def-stat", item.defense);
                break;
            case "sword":
            case "axe":
            case "bow":
            case "crossbow":
                row = table.rows[4];
                cell = row.cells[0];
                item = await Provider.getWeapon(id);
                console.log(item);
                cell.innerHTML = `<img src="${item.image_url}" onclick="JSDetailMob.unequipItem('${item.id}')" style="width: 50px; height: 50px;">`;
                this.updateStats("dmg-stat", item.attack);

                break;
        }
    }


    
    static async unequipItem(id){
        const parts = id.split('_');
        if (parts.length === 1) {
            parts.push(parts[0]);
        }
        const [XXX, YYY] = parts;
        console.log(XXX, YYY);

        let item = null;
        let table = document.getElementById("itemTable");
        let row = null;
        let cell = null;

        switch(YYY){
            case "helmet":
                row = table.rows[0];
                cell = row.cells[0];
                item = await Provider.getArmor(id);
                console.log(item);
                cell.innerHTML = `None`;
                this.updateStats("def-stat", -item.defense);
                break;
            case "chestplate":
                row = table.rows[1];
                cell = row.cells[0];
                item = await Provider.getArmor(id);
                console.log(item);
                cell.innerHTML = `None`;
                this.updateStats("def-stat", -item.defense);
                break;
            case "leggings":
                row = table.rows[2];
                cell = row.cells[0];
                item = await Provider.getArmor(id);
                console.log(item);
                cell.innerHTML = `None`;
                this.updateStats("def-stat", -item.defense);
                break;
            case "boots":
                row = table.rows[3];
                cell = row.cells[0];
                item = await Provider.getArmor(id);
                console.log(item);
                cell.innerHTML = `None`;
                this.updateStats("def-stat", -item.defense);                
                break;
            case "sword":
            case "axe":
            case "bow":
            case "crossbow":
                row = table.rows[4];
                cell = row.cells[0];
                item = await Provider.getWeapon(id);
                console.log(item);
                cell.innerHTML = `None`;
                this.updateStats("dmg-stat", -item.attack);
                break;
        }
    }

    static updateStats(stat, value) {
        const statElement = document.getElementById(stat);
        const currentStat = parseInt(statElement.innerHTML) || 0;
        statElement.innerHTML = currentStat + value;
    }
    
    

    static async getInitValue(cat){
        switch(cat){
            case "helmet":


        }
    }
}
