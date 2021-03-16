'use strict'
//Задача №1
function parseCount(value) {
    if (Number.isNaN(Number.parseInt(value))) {
        throw new Error ('Невалидное значение');
    }
    return Number.parseInt(value);
}

function validateCount(value) {
    try {
        return parseCount(value);
    }
    catch(error) {
        return error;
    }
}

//Задача №2
class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
        if (firstSide + secondSide < thirdSide || firstSide + thirdSide < secondSide || secondSide + thirdSide < firstSide) {
            throw new Error ('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        return this.firstSide + this.secondSide + this.thirdSide;
    }

    getArea() {
        return +(Math.sqrt(this.getPerimeter() / 2 * (this.getPerimeter() / 2 - this.firstSide) * (this.getPerimeter() / 2 - this.secondSide) * (this.getPerimeter() / 2 - this.thirdSide))).toFixed(3);
    }
}

function getTriangle(firstSide, secondSide, thirdSide) {
    try {
        return new Triangle(firstSide, secondSide, thirdSide);
    }
    catch(error) {
        return {
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            },

            getArea() {
                return 'Ошибка! Треугольник не существует';
            }
        }     
    }
}