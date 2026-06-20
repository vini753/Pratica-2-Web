import axios from "axios";

const url = 'http://localhost:3000';

async function getPotions() {
    return axios.get(url + '/potions');
}

async function deletePotion(id) {
    return axios.delete(url + '/potions/' + id);
}

async function postPotion(potion) {
    return axios.post(url + '/potions', potion);
}

export default { getPotions, deletePotion, postPotion };