import Provider from "../../services/Provider.js";

export default class AllMobs{
    static async render(){
        const mobs = await Provider.getAllMobs();
        console.log(mobs);
        return `
            <h1>All Mobs</h1>
            <ul>
                ${mobs.map(mob => `<li>${mob.name}</li>`).join('')}
            </ul>
        `;
    }
}