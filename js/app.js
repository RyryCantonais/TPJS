import Inventory from "./views/pages/Inventory.js";
import Clicker from "./views/pages/Clicker.js";

import Utils from "./services/Utils.js";

const routes = {
    "/": Inventory,
    "/inventory": Inventory,
    "/clicker": Clicker
};

const router = async () => {
    const content = null || document.querySelector('#content');
    let request = Utils.parseRequestURL();
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '');
    let page = routes[parsedURL] || Inventory;
    content.innerHTML = await page.render(request.id);
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
