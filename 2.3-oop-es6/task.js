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
    constructor(name, books) {
        super();
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (this.state > 30) {
            this.books.push(book);
        }
    }

 /*   Тест проходит, но код неверный. Должен реагировать на любой type.
    findBookBy(type, value) {
        if (this.books.find(item => item.releaseDate === value)) {
            return (this.books.find(item => item.releaseDate === value));            
        }
        else {
            return null;
        }
    }
*/
    giveBookByName(bookName) {
        let searchableBook = this.books.find(item => item.name === bookName);
        if (searchableBook) {
            this.books.splice((this.books.indexOf(searchableBook)), 1);
            return searchableBook;
        }
        else {
            return null;
        }
    }
}