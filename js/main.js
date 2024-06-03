class User {
    constructor (name, surname, favColor, pw) {
        this.name = name;
        this.surname = surname;
        this.favColor = favColor;
        this.pw = pw;
    }
}

// var u1 = new User("testname", "testsurname", "testcolor", "");

var u1 = new User();

// name

u1.name = prompt("what's your name?");

// surname

u1.surname = prompt("what's your surname?");

// fav color

u1.favColor = prompt("what's your favourite color?");

// password

u1.pw = u1.name + u1.surname + u1.favColor + "23";

alert(`ur ai generated password is ${u1.name}${u1.surname}${u1.favColor}23`);

console.log(u1.name + u1.surname + u1.favColor + "23");

document.getElementById('user').innerHTML = `your ai generated password is: ${u1.pw}`;