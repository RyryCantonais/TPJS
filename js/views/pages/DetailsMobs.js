import Provider from "../../services/Provider.js";

export default class DetailsMobs {
    helmet = null;
    chestplate = null;
    leggings = null;
    boots = null;
    weapon = null;

    defense = 0;
    damage = 0;
    life = 0;

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

        // Mettre à jour l'affichage de l'équipement
        this.updateEquipmentDisplay();
    }

    static updateEquipmentDisplay() {
        document.getElementById('EHelmet').innerText = this.helmet || 'None';
        document.getElementById('EChestplate').innerText = this.chestplate || 'None';
        document.getElementById('ELeggings').innerText = this.leggings || 'None';
        document.getElementById('EBoots').innerText = this.boots || 'None';
        document.getElementById('EWeapons').innerText = this.weapon || 'None';
    }

    static async render(id) {
        const mobs = await Provider.getMob(id);
        const armors = await Provider.getAllArmors();
        const weapons = await Provider.getAllWeapons();
        const allEquipments = [...armors, ...weapons]; 

        let tableContent = "<tr>"; 
        allEquipments.forEach((equip, index) => {
            tableContent += `
                <td>
                    <img id="${equip.id}" src="${equip.image_url}" alt="${equip.name}" style="width: 50px; height: 50px;" onclick="this.equipItem('${equip.id}')">
                    <p>${equip.name}</p>
                </td>
            `;
            if ((index + 1) % 10 === 0) {
                tableContent += `</tr><tr>`;
            }
        });

        tableContent += "</tr>";

        return `
        <link rel="stylesheet" href="../../css/detailsmobs.css">
            <div class="mob" id="mob-container">
                <div class="mob" id="desc-mob">
                    <h2>${mobs.name}</h2>
                    <p>${mobs.description}</p>
                    <img src="${mobs.image_url}" alt="${mobs.name}" style="max-width: 100%; height: auto;">
                </div>
                <div class="mob" id="equipement-mob">
                    <h2>Equipement</h2>
                    <table>
                        <tr><td id="EHelmet">None</td></tr>
                        <tr><td id="EChestplate">None</td></tr>
                        <tr><td id="ELeggings">None</td></tr>
                        <tr><td id="EBoots">None</td></tr>
                        <tr><td id="EWeapons">None</td></tr>
                    </table>
                </div>
                <div class="mob" id="stats-mob">
                    <table>
                        <tr>
                            <th>Health</th>
                            <th>Damage</th>
                            <th>Defense</th>
                        </tr>
                        <tr>
                            <td>${mobs.health}</td>
                            <td>${mobs.damage}</td>
                            <td>${mobs.defense}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <h2>Selectionner votre équipement</h2>
            <table id="equipement-list" border="1">
                ${tableContent}
            </table>
        `;
    }
}