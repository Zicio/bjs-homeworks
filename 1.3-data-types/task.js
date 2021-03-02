'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
    console.log(typeof date);
    if (Number.isNaN(parseInt(percent)) || parseInt(percent) < 0) {
        return `Параметр percent содержит неправильное значение "${percent}"`;
    }
    else if (Number.isNaN(parseInt(contribution)) || parseInt(contribution) < 0) {
        return `Параметр contribution содержит неправильное значение "${contribution}"`;
    }
    else if (Number.isNaN(parseInt(amount)) || parseInt(amount) < 0) {
        return `Параметр amount содержит неправильное значение "${amount}"`;
    }
    else if (Date.parse(date) !== Date.parse(date)) {
        return 'Вы не заполнили параметр date';
    }
    percent = parseInt(percent) / 1200;
    contribution = parseInt(contribution);
    amount = parseInt(amount);
    let capital = amount - contribution;
    let today = new Date();
    let period = (date.getFullYear() - today.getFullYear()) * 12 - (date.getMonth() - today.getMonth());
    if (period === 0) {
        return 'Срок ипотеки должен составлять не менее одного месяца. Пожауста укажите правильный параметр period';
    }
    let monthlyPay = capital * (percent + percent / (((1 + percent) ** period) - 1));
    totalAmount = +((monthlyPay * period).toFixed(2));
    console.log(totalAmount);
    return totalAmount;
}

function getGreeting(name) {
    if (!name) {
        name = 'Аноним';
    }
    return `Привет, мир! Меня зовут ${name}.`;
}