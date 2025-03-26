import Provider from "../../services/Provider.js";

export default class DetailsArmor{
    static async render(id){
        const armors = await Provider.getArmor(id);
        console.log(armors);
        return `
            <h2>${armors.name}</h2>
            <p>${armors.description}</p>
            <img src="${armors.image_url}" alt="${armors.name}" style="max-width: 100%; height: auto;">
            <table>
                <tr>
                    <th>Level</th>
                    <th>Defense</th>
                    <th>Weight</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>${armors.level}</td>
                    <td>${armors.defense}</td>
                    <td>${armors.weight}</td>
                    <td>${armors.price}</td>
                </tr>
            </table>
        `;
    }
}