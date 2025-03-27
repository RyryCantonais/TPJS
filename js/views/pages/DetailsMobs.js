import Provider from "../../services/Provider.js";
import JSDetailMob from "../../services/JSDetailMob.js";

export default class DetailsMobs {
    static async render(id) {
        const mobs = await Provider.getMob(id);
        const armors = await Provider.getAllArmors();
        const weapons = await Provider.getAllWeapons();
        const allEquipments = [...armors, ...weapons]; 
        window.JSDetailMob = JSDetailMob;


        let tableContent = "<tr>"; 
        allEquipments.forEach((equip, index) => {
            tableContent += `
                <td>
                    <img id="${equip}" src="${equip.image_url}" alt="${equip.name}" onclick="JSDetailMob.clic('${equip.id}')" style="width: 50px; height: 50px;" data-json='${JSON.stringify(equip)}'>
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

    static afterRender(id) {
        new JSDetailMob(id);
    }
}
