'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
    if (isNaN(parseInt(percent))) {
        return `Параметр percent содержит неправильное значение "${percent}"`;
    }
    else if (isNaN(parseInt(contribution))) {
        return `Параметр contribution содержит неправильное значение "${contribution}"`;
    }
    else if (isNaN(parseInt(amount))) {
        return `Параметр amount содержит неправильное значение "${amount}"`;
    }
    else {
        percent = parseInt(percent) / 1200;
        contribution = parseInt(contribution);
        amount = parseInt(amount);
        let capital = amount - contribution;
        let today = new Date();
        let period = (date.getFullYear() - today.getFullYear()) * 12 - (date.getMonth() - today.getMonth());
        let monthlyPay = capital * (percent + percent / (((1 + percent) ** period) - 1));
        totalAmount = ((monthlyPay * period).toFixed(2));
        totalAmount = String(totalAmount);
        console.log(totalAmount);
    }
    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}