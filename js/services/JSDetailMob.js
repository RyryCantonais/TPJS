export default class JSDetailMob {
    static clic(equip){console.log(equip)}


    // constructor() {
    //     document.addEventListener("DOMContentLoaded", () => this.init());
    // }

    init() {
        this.equipementList = document.getElementById("equipement-list");
        this.statsMob = document.getElementById("stats-mob");

        this.equipementSlots = {
            Helmet: document.getElementById("EHelmet"),
            Chestplate: document.getElementById("EChestplate"),
            Leggings: document.getElementById("ELeggings"),
            Boots: document.getElementById("EBoots"),
            Weapons: document.getElementById("EWeapons")
        };

        this.stats = {
            damage: this.statsMob.querySelector("tr:nth-child(2) td:nth-child(2)"),
            defense: this.statsMob.querySelector("tr:nth-child(2) td:nth-child(3)")
        };

        this.equippedItems = {};

        this.equipementList.querySelectorAll("img").forEach(img => {
            img.addEventListener("click", () => this.equipItem(img));
        });

        Object.values(this.equipementSlots).forEach(slot => {
            slot.addEventListener("click", () => this.unequipItem(slot));
        });
    }

    equipItem(img) {
        const itemId = img.id;
        const itemData = JSON.parse(img.getAttribute("data-json"));
        const [prefix, type] = itemId.includes("_") ? itemId.split("_") : [null, itemId];

        if (type in this.equipementSlots) {
            if (this.equippedItems[type]) {
                this.unequipItem(this.equipementSlots[type]);
            }
            this.equipementSlots[type].textContent = itemData.name;
            this.equippedItems[type] = itemData;
            this.updateStats(itemData, "add");
        }
    }

    unequipItem(slot) {
        const type = Object.keys(this.equipementSlots).find(key => this.equipementSlots[key] === slot);
        if (this.equippedItems[type]) {
            this.updateStats(this.equippedItems[type], "remove");
            slot.textContent = "None";
            delete this.equippedItems[type];
        }
    }

    updateStats(item, action) {
        if (item.damage && action === "add") {
            this.stats.damage.textContent = parseInt(this.stats.damage.textContent) + item.damage;
        } else if (item.damage && action === "remove") {
            this.stats.damage.textContent = parseInt(this.stats.damage.textContent) - item.damage;
        }

        if (item.defense && action === "add") {
            this.stats.defense.textContent = parseInt(this.stats.defense.textContent) + item.defense;
        } else if (item.defense && action === "remove") {
            this.stats.defense.textContent = parseInt(this.stats.defense.textContent) - item.defense;
        }
    }
}
