// (function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {};
    person.firstName = "Wilmarie";
    person.lastName = " De La Cruz";
    console.log(person.firstName);
    console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        return `Hello from ${person.firstName} ${person.lastName}!`;
    }
        console.log(person.sayHello());


    // function sayHello () {
    //     return ("Hello " + person.firstName + person.lastName + "!")
    // }
    // console.log(sayHello(person));

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (shopper) {
        let forTheLow = (shopper.amount * .12.toFixed(2));
        let savedCoins = shopper.amount - (shopper.amount* .12.toFixed(2));
        console.log("Hey " + shopper.name + "!")
        if (shopper.amount < 200) {
        console.log("Your total is $" + shopper.amount.toFixed(2));

        }else{
        console.log("Hi! " + shopper.name + " your total is $" + shopper.amount);
        console.log("Your discount is $" + forTheLow);
        console.log("Your total with the discount is $" + savedCoins);
        }
    })
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"s
     * > console.log(books[0].author.lastName) // "Adams"
     */

let books = [
        {
            title: "IT",
            author: {
                firstname: "Stephen",
                lastname: "King",
            }
        },
    {
        title: "Their Eyes Were Watching God",
        author: {
        firstname: "Zora",
            lastname: "Neale-Hurston",
        }
    },
    {
        title: "Lord of the Flies",
        author: {
            firstname: "William",
            lastname: "Golding",
        }
    },
    {
        title: "To Kill a Mockingbird",
        author: {
            firstname: "Harper",
            lastname: "Lee",
        }
    },
        {
            title: "Esperanza Rising",
            author: {
                firstname: "Pam",
                lastname: "Muñoz Ryan",
            }
        },
    ]

console.log(books);
console.log(books[2].title);
console.log(books[1].author.firstname)
    console.log(books[3].author.lastname)


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

        for(let i = 0; i < books.length; i++) {
            console.log(`Book # ${i + 1}`);
            console.log(`Title: ${books[i].title}`);
            console.log("Author: " + books[i].author.firstname + " " + books[i].author.lastname);
            console.log("---");
        }

            function createBook(bookTitle, author) {
                author = author.split(" ");
                let book = {
                    title: bookTitle,
                    author: {
                        firstname: author[0],
                        lastname: author[1],
                    }
                }
                return book;
            }

            books.push(createBook("Akame Ga Kill!", "Takahiro"));
            console.log(books);

            function showBookInfo(book) {
                console.log(`Book # ${books.indexOf(book) + 1 }`);
                console.log(`Title: ${book.title}`);
                console.log(`Author: ${book.author.firstname} ${book.author.firstname}`);
        }
            for (let i=0; i <books.length; i++) {
                showBookInfo(books[i]);
            }
// console.log(books);

// })();
