import Provider from "../../services/Provider.js";

export default class DetailWeapon{
    static async render(id){
        const weapons = await Provider.getWeapon(id);
        console.log(weapons);
        return `
            <h2>${weapons.name}</h2>
            <p>${weapons.description}</p>
            <img src="${weapons.image_url}" alt="${weapons.name}" style="max-width: 100%; height: auto;">
            <table>
                <tr>
                    <th>Level</th>
                    <th>Damage</th>
                    <th>Weight</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>${weapons.level}</td>
                    <td>${weapons.damage}</td>
                    <td>${weapons.weight}</td>
                    <td>${weapons.price}</td>
                </tr>
            </table>
        `;
    }
}