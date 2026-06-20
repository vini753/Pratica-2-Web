class Potion {
    constructor(id, name, desc, photo, price) {
        this.id = id
        this.name = name
        this.desc = desc
        this.photo = photo
        this.price = price
    }
}

const potions = [
    new Potion(1, 'blue sky', 'Essa poção provê', 'https://i.ibb.co/ZzS7xb2/rsz-sky.png', 300),
    new Potion(2, 'perfume', 'cheirando', 'https://i.ibb.co/pyhZJXf/rsz-lilas.png', 200)
];

function findAll() {
    return potions;
}

function findOne(id) {
    const potion = potions.find(p => p.id == id);
    return potion;
}

function create(potion) {
    const id = potions.length + 1;
    const newPotion = new Potion(id, potion.name, potion.desc, potion.photo, potion.price);
    potions.push(newPotion);
    return findOne(id);
}

export default { findAll, findOne, create }