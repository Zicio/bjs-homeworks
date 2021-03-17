//Task №1
'use strict'
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
function getNames() {
    const nameWeapons = [];
    weapons.forEach((item) => {
        nameWeapons.push(item.name);
    })
    return nameWeapons;
} 

function getCountReliableWeapons() {
    weapons.indexOf(item.//weapons[1].durabulity)
}