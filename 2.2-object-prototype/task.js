'use strict'
//Задача №1
String.prototype.isPalindrome = function() {
    return this.replace(/ /g, '').toLowerCase().split("").reverse().join("") === this.replace(/ /g, '').toLowerCase();
}

//Задача №2
function getAverageMark(marks) {
    let average = 0;
    if (marks.length === 0) {
        return average;
    }
    else {
        for (let i = 0; i < marks.length; i++) {
            average += marks[i];
        }
        return Math.round(average / marks.length);
    }
}

function checkBirthday(birthday) {
    let now = +new Date();
    birthday = +new Date(birthday);
    let diff = now - birthday;
    let maturity = 31622400000/*кол-во миллисекунд в високосном году*/* 4 + 31536000000/*кол-во миллисекунд в обычном году*/ * 14;
    return diff >= maturity;
}