import { ENDPOINT } from "../config.js";

export default class Provider{

    // Récupérer les items (ceux servant à la construction des objets)
    static getItem = async (id) => {
        const options = {
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await fetch(`${ENDPOINT}/${id}`, options); 
            const json = await response.json();
            return json;
        } catch (err) {
            console.error('Error getting documents:', err);
        }
    }

    // Récupérer tout les mobs contenus dans le fichier JSON
    static getAllMobs = async () => {
        const options = {
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await fetch(`${ENDPOINT}/mobs`, options);
            const json = await response.json();
            return json;
        } catch (err) {
            console.error('Error getting documents:', err);
        }
    }

    // Récupérer un mob selon son ID
    static getMob = async (id) => {
        const options = {
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await fetch(`${ENDPOINT}/mobs/${id}`, options);
            const json = await response.json();
            return json;
        } catch (err) {
            console.error('Error getting documents:', err);
        }
    }

    // Récupérer tout les items d'armures contenus dans le fichier JSON
    static getAllArmors = async () => {
        const options = {
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await fetch(`${ENDPOINT}/armors`, options);
            const json = await response.json();
            return json;
        } catch (err) {
            console.error('Error getting documents:', err);
        }
    }

    // Récupérer un item d'armure selon son ID
    static getArmor = async (id) => {
        const options = {
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await fetch(`${ENDPOINT}/armors/${id}`, options);
            const json = await response.json();
            return json;
        } catch (err) {
            console.error('Error getting documents:', err);
        }
    }

    // Récupérer tout les items d'armes contenus dans le fichier JSON
    static getAllWeapons = async () => {
        const options = {
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await fetch(`${ENDPOINT}/weapons`, options);
            const json = await response.json();
            return json;
        } catch (err) {
            console.error('Error getting documents:', err);
        }
    }

    // Récupérer un item d'arme selon son ID
    static getWeapon = async (id) => {
        const options = {
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await fetch(`${ENDPOINT}/weapons/${id}`, options);
            const json = await response.json();
            return json;
        } catch (err) {
            console.error('Error getting documents:', err);
        }
    }

    //Récupérer tout les items possédés par le joueur
    static getInventory = async () => {
        const options = {
            method: "GET",
            header: {
                "Content-Type": "application/json"
            }
        };
        try {
            const response = await fetch(`${ENDPOINT}/inventory`, options);
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error(`Error: ${error}`);
        }
    }
}