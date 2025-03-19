import Utils from "../../services/Utils.js";
import Provider from "../../services/Provider.js";

export default class Inventory{
    async render(){
        let request = Utils.parseRequestURL();
        let inventory = await Provider.getInventory();
        let view = `
            <section class="section">
                <h1>Inventory</h1>
                <ul>
                    ${inventory.map(item => `
                        <li>
                            <a href="#/inventory/${item.id}">${item.name}</a>
                        </li>
                    `).join('\n')}
                </ul>
            </section>
        `;
        return view;
    }
}