import { ENDPOINT } from "../config.js";

export default class Provider{
    static getInventory = async (limit=10) => {
        const options = {
            method: "GET",
            header: {
                "Content-Type": "application/json"
            }
        };
        try {
            const response = await fetch(`${ENDPOINT}?_limit=${limit}`, options);
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error(`Error: ${error}`);
        }   
    }

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