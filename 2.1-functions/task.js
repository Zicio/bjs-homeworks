'use strict';
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
        x1 = -b / 2 * a;
        return { 
            D, 
            roots: [x1] 
        };
    }
    else {
        x1 = (-b + Math.sqrt(D)) / 2 * a;
        x2 = (-b - Math.sqrt(D)) / 2 * a;
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
        return `Уравнение имеет один корень X₁ = ${result.x1}`;        
    }
    else {
        return `Уравнение имеет два корня. X₁ = ${result.x1}, X₂ = ${result.x2}`;
    }
}

showSolutionsMessage(1, 10, 3);
debugger;