//Task №1
'use strict'
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
function getNames() {
    const nameWeapons = [];
    weapons.forEach(weapon => nameWeapons.push(weapon.name));
    return nameWeapons;
} 

function collectReliableWeapons(durability) {
    return weapons.filter(weapon => weapon.durability > durability);
}

function getCountReliableWeapons(durability) {
    return collectReliableWeapons(durability).length;
}

function hasReliableWeapons(durability) {
    return (weapons.some(weapon => weapon.durability > durability)); 
}

function getReliableWeaponsNames(durability) {
    const nameReliableWeapons = [];
    collectReliableWeapons(durability).forEach(weapon => nameReliableWeapons.push(weapon.name));
    return nameReliableWeapons;
}

function getTotalDamage() {
    return weapons.reduce((sum, current) => sum + current.attack, 0);
}

function getValuestCountToSumValues(arr, finalSum) {
    const result = [];
    arr.reduce(function (sum, current) {
        result.push(sum + current);
        return sum + current;
    }, 0);
    return result.indexOf(result.find(number => number >= finalSum)) + 1;
}