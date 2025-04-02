
export default class Favoris {
    static mobs = JSON.parse(localStorage.getItem('mobs')) || [];
    static armors = JSON.parse(localStorage.getItem('armors')) || [];
    static weapons = JSON.parse(localStorage.getItem('weapons')) || [];

    static saveToLocalStorage() {
        localStorage.setItem('mobs', JSON.stringify(this.mobs));
        localStorage.setItem('armors', JSON.stringify(this.armors));
        localStorage.setItem('weapons', JSON.stringify(this.weapons));
    }

    static addMob(id) {
        if (this.isFavorite(id)) {
            this.removeMob(id);
        } else {
            this.mobs.push({ id });
            this.saveToLocalStorage();
            console.log(`Mob avec l'ID ${id} ajouté aux favoris.`);
        }
        this.changeFavoris(id);
    }

    static addArmor(id) {
        if (this.isFavorite(id)) {
            this.removeArmor(id);
        } else {
            this.armors.push({ id });
            this.saveToLocalStorage();
            console.log(`Armure avec l'ID ${id} ajoutée aux favoris.`);
        }
        this.changeFavoris(id);
    }

    static addWeapon(id) {
        if (this.isFavorite(id)) {
            this.removeWeapon(id);
        } else {
            this.weapons.push({ id });
            this.saveToLocalStorage();
            console.log(`Arme avec l'ID ${id} ajoutée aux favoris.`);
        }
        this.changeFavoris(id);
    }

    static isFavorite(id) {
        const isMobFavoris = this.mobs.some(mob => mob.id === id);
        const isArmorFavoris = this.armors.some(armor => armor.id === id);
        const isWeaponFavoris = this.weapons.some(weapon => weapon.id === id);

        return isMobFavoris || isArmorFavoris || isWeaponFavoris;
    }

    static removeMob(id) {
        this.mobs = this.mobs.filter(mob => mob.id !== id);
        this.saveToLocalStorage();
        console.log(`Mob avec l'ID ${id} retiré des favoris.`);
    }

    static removeArmor(id) {
        this.armors = this.armors.filter(armor => armor.id !== id);
        this.saveToLocalStorage();
        console.log(`Armure avec l'ID ${id} retirée des favoris.`);
    }

    static removeWeapon(id) {
        this.weapons = this.weapons.filter(weapon => weapon.id !== id);
        this.saveToLocalStorage();
        console.log(`Arme avec l'ID ${id} retirée des favoris.`);
    }

    static getFavoris() {
        return {
            mobs: this.mobs,
            armors: this.armors,
            weapons: this.weapons
        };
    }

    static changeFavoris(id) {
        if (this.isFavorite(id)) {
            document.getElementById('favorites-button').innerHTML = 'Retirer aux favoris';
        }
        else {
            document.getElementById('favorites-button').innerHTML = 'Ajouter aux favoris';
        }  
    }
}
