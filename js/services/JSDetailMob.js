console.log("JSDetailMob.js");
document.addEventListener("DOMContentLoaded", () => {
    const equipmentImages = document.querySelectorAll("#equipement-list img");

    equipmentImages.forEach(img => {
        img.addEventListener("click", (event) => {
            const equipmentId = event.target.id;
            console.log("Équipement sélectionné :", equipmentId);
        });
    });
});


export default class JSDetailMob {
    mob = null ;

    helmet = null;
    chestplate = null;
    leggings = null;
    boots = null;
    weapon = null;

    defense = 0;
    damage = 0;
    health = 0;

    JSDetailMob(mob) {
        this.mob = mob;
        this.health = mob.health;
        this.damage = mob.damage;
        this.defense = mob.defense;
    }

    static equipItem(equipId) {
        const [_, category] = equipId.split('_'); 
        switch (category) {
            case 'helmet':
                this.helmet = equipId;
                break;
            case 'chestplate':
                this.chestplate = equipId;
                break;
            case 'leggings':
                this.leggings = equipId;
                break;
            case 'boots':
                this.boots = equipId;
                break;
            case 'weapon':
                this.weapon = equipId;
                break;
            default:
                console.error(`Unknown category: ${category}`);
        }
        this.updateEquipmentDisplay();
    }

    static updateEquipmentDisplay() {
        document.getElementById('EHelmet').innerText = this.helmet || 'None';
        document.getElementById('EChestplate').innerText = this.chestplate || 'None';
        document.getElementById('ELeggings').innerText = this.leggings || 'None';
        document.getElementById('EBoots').innerText = this.boots || 'None';
        document.getElementById('EWeapons').innerText = this.weapon || 'None';
    }
}