'use strict';
//Задача №1
function getSolutions(a, b, c) {
    let D = b ** 2 - 4 * a * c;
    let x1;
    let x2;
    if (D < 0) {
        return { 
            D, 
            roots: [] 
        };
    }
    else if (D === 0) {
        x1 = -b / (2 * a);
        return { 
            D, 
            roots: [x1] 
        };
    }
    else {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return { 
            D, 
            roots: [x1, x2] 
        };
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        return 'Уравнение не имеет вещественных корней';
    }
    else if (result.D === 0) {
        return `Уравнение имеет один корень X₁ = ${result.roots}`;    
    }
    else {
        return `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
    }
}


//Задача №2
function getAverageScore(data) {
    if (Object.keys(data).length === 0) {
        data.average = 0;
        return data;
    }
    else {
        for (let prop in data) {
            console.log(`Свойство ${prop}, значение: ${getAverageMark(data[prop])}`);
            data[prop] = getAverageMark(data[prop]);
        }

        //Добавление доп.свойства average

        //1 вариант  (как я понял reduce не работает при пустом объекте data)
        /* data.average = (Object.values(data).reduce((a, b) => (a + b)) / (Object.values(data)).length);*/

        //2 вариант
        let sum1 = 0;
        for (let i = 0; i < Object.values(data).length; i++)  {
            sum1 += (Object.values(data))[i];
        }
        data.average = sum1 / Object.values(data).length;
        return data;
    }
}

function getAverageMark(marks) {
    let sum = 0;
    if (marks.length === 0) {
        return sum;
    }
    else {
        for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
        }
        return sum / marks.length;
    }  
}