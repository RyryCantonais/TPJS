import AllMobs from "./views/pages/AllMobs.js";
import DetailsMobs from "./views/pages/DetailsMobs.js";
import AllItems from "./views/pages/AllItems.js";
import DetailArmor from "./views/pages/DetailsArmor.js";
import DetailWeapon from "./views/pages/DetailWeapon.js";
import AllFavoris from "./views/pages/AllFavoris.js";

import Utils from "./services/Utils.js";

//Toute les routes menant vers une page
const routes = {
    "/": AllMobs,
    "/mobs": AllMobs,
    "/mobs/:id": DetailsMobs,
    "/items": AllItems,
    "/weapon/:id": DetailWeapon,
    "/armor/:id": DetailArmor,
    "/favoris": AllFavoris
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
