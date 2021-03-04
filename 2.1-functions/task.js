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
//Проверка на пустой объект data
    if (Object.keys(data).length === 0) {
        data.average = 0;
        return data;
    }
    else {
//изменение значений на средние значения в объекте data
        for (let prop in data) {
            data[prop] = getAverageMark(data[prop]);
        }
//Добавление доп.свойства average в объект data
//1 вариант (как я понял reduce не работает при пустом объекте data)
        /* data.average = (Object.values(data).reduce((a, b) => (a + b)) / (Object.values(data)).length);*/
//2 вариант
        let sumScore = 0;
        for (let i = 0; i < Object.values(data).length; i++)  {
            sumScore += (Object.values(data))[i];
        }
        data.average = sumScore / Object.values(data).length;
        return data;
    }
}

function getAverageMark(marks) {
    let sumMarks = 0;
    if (marks.length === 0) {
        return sumMarks;
    }
    else {
        for (let i = 0; i < marks.length; i++) {
            sumMarks += marks[i];
        }
        return sumMarks / marks.length;
    }  
}


//Задача №3
function getPersonData(secretData) {
    return {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb)
    };
}

function getDecodedValue(secret) {
    if (secret === 0) {
        return 'Родриго';
    }
    else if (secret === 1) {
        return 'Эмильо';
    }
}