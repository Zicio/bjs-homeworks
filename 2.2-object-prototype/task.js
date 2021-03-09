'use strict'
//String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function() {
    //return this.toLowerCase().split("").reverse().join("") === this.toLowerCase();
    return this.replace(/ /g, '').toLowerCase().split("").reverse().join("") === this.replace(/ /g, '').toLowerCase();
}


function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}