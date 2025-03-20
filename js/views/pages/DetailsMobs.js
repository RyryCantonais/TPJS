import Provider from "../../services/Provider.js";

export default class DetailsMobs{
    static async render(id){
        const mobs = await Provider.getMob(id);
        console.log(mobs);
        return `
            <h1>${mobs.name}</h1>
            <p>${mobs.description}</p>
            <img src="${mobs.image_url}" alt="${mobs.name}" style="max-width: 100%; height: auto;">
        `;
    }
}