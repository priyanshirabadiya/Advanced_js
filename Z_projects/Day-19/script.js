"use strict";

class person {
    constructor(name) {
        this.species = "Human being";
        this.name = name;
    }
    eat() {
        console.log('we can eat');
    }
    go() {
        console.log('you can go');
    }
}

const delay = new person("priyanshi")
console.log(delay);


class engineer extends person {
    constructor(name) {
        super(name);
    }
    work() {
        console.log('work done');
    }
}


const priysnhiR = new engineer("priyanshi")
console.log(priysnhiR.work());
console.log(priysnhiR.go());
// console.log(priysnhiR);


// const mehdialiEr = new engineer("Mehdiali");

// console.log(mehdialiEr.eat()); // Eat function inherited from person class.

// console.log(mehdialiEr.sleep()); // Sleep function inherited from person class.
// console.log(mehdialiEr.work()); // Work function from engineer class. Because Method overloading.
// console.log(mehdialiEr);