import Provider from "../../services/Provider.js";

export default class DetailsMobs{
    static async render(id){
        const mobs = await Provider.getMob(id);
        const armors = await Provider.getArmors();
        console.log(mobs);
        return `
            <h2>${mobs.name}</h2>
            <p>${mobs.description}</p>
            <img src="${mobs.image_url}" alt="${mobs.name}" style="max-width: 100%; height: auto;">
            <table>
            
            </table>

        `;
    }
}