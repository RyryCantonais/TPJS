import Provider from "../../services/Provider.js";

export default class DetailsMobs {
    static async render(id) {
        const mobs = await Provider.getMob(id);
        const armors = await Provider.getAllArmors();
        const weapons = await Provider.getAllWeapons();
        const allEquipments = [...armors, ...weapons]; 

        let tableContent = "<tr>"; 
        allEquipments.forEach((equip, index) => {
            tableContent += `
                <td>
                    <img id="${equip.id}" src="${equip.image_url}" alt="${equip.name}" style="width: 50px; height: 50px;">
                    <p>${equip.name}</p>
                </td>
            `;
            if ((index + 1) % 10 === 0) {
                tableContent += `</tr><tr>`;
            }
        });

        tableContent += "</tr>";

        return `
            <h2>${mobs.name}</h2>
            <p>${mobs.description}</p>
            <img src="${mobs.image_url}" alt="${mobs.name}" style="max-width: 100%; height: auto;">
            <h2>Selectionner votre équipement</h2>
            <table border="1">
                ${tableContent}
            </table>
        `;
    }
}
