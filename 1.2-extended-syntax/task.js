'use strict'
function getResult(a,b,c){
	let x = [];
	let discriminant = b ** 2  - 4 * a * c;
	if(discriminant === 0) {
		x.push(-b / (2 * a))
	}
	else if(discriminant > 0) {
		x.push((-b + Math.sqrt(discriminant)) / (2 * a));
		x.push((-b - Math.sqrt(discriminant)) / (2 * a));
	}
    return x;
}

function getAverageMark(marks){
	let averageMark = 0;	
	if (marks.length > 5) {
		console.log('Количество оценок больше 5');
		marks.splice(5);
	}
	if (marks.length !== 0) {
		let sumMark = 0;
		for (let i = 0; i < marks.length; i++) {
			sumMark += marks[i];	
		}
		averageMark = sumMark / marks.length;
	}
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let year = dateOfBirthday.getFullYear();
	let today = (new Date()).getFullYear();
	let result;
	if ((today - year) >= 18) {
		result = `Не желаете ли олд-фэшн, ${name}?`;
	}
	else {
		result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
	}
    return result;
}