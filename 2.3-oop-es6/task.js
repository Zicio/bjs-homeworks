'use strict'
//Задача №1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state * 1.5;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        }
        else if (state >= 100) {
            this._state = 100;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}


//Задача №2
class Library extends PrintEditionItem {
    constructor(name) {
        super();
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        if (this.books.find(item => item[type] === value)) {
            return (this.books.find(item => item[type] === value));            
        }
        else {
            return null;
        }
    }

    giveBookByName(bookName) {
        const searchableBook = this.books.find(item => item.name === bookName);
        if (searchableBook) {
            this.books.splice((this.books.indexOf(searchableBook)), 1);
            return searchableBook;
        }
        else {
            return null;
        }
    }
}

//Задача №3
class StudentLog{
    constructor(name)  {
        this.name = name;
        this.base = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (+grade >= 1 && +grade <= 5) {
            if (this.base[subject] === undefined) {
                this.base[subject] = Array.of(grade);
                return this.base[subject].length;
            }
            else {
                this.base[subject].push(grade);
                return this.base[subject].length;
            }
        }
        else {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
            if (this.base[subject] === undefined) {
                this.base[subject] = [];
            }
            return this.base[subject].length;
        }
    }

    getAverageBySubject(subject) {
        if (subject in this.base) {
            let sumGrades = 0;
            for (let  i = 0; i < this.base[subject].length; i++) {
                sumGrades += this.base[subject][i];
            }
            const averageGrades = sumGrades / this.base[subject].length;
            return averageGrades;
        }
        else {
            return 0;
        }
        
    }

    getTotalAverage() {
        const TotalSumGradesArr = Object.values(this.base).join().split(',');
        if (TotalSumGradesArr.length !== 0) {
            let TotalSumGrades = 0;
            for (let  i = 0; i < TotalSumGradesArr.length; i++) {
                TotalSumGrades += +TotalSumGradesArr[i];
            }
            const TotalAverageGrades = TotalSumGrades / TotalSumGradesArr.length;
            return TotalAverageGrades;
        }
        else {
            return 0;
        }
    }
}