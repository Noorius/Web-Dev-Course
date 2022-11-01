let user = {
    name: "John",
    surname: "smith",
}

user.name = "Pete";
delete user.name;

// **********

function empty(o){
    for(let ob in o){
        return false;
    }
    return true;
}

//**********

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for(let o in salaries){
    sum += salaries[o];
}

//*********

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiply(o){
    for(let ob in o){
        if(typeof ob == "number"){
            menu[ob] *= 2;
        }
    }
}

//******

function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}

let user = makeUser();

alert( user.ref().name ); // John

//***************

let calculator = {
    read(){
        this.a = +prompt("1: ", "");
        this.b = +prompt("2: ", "");
    },

    sum(){
        return this.a+this.b;
    },

    mul(){
        return this.a*this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//*************************

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep();

//**********

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() );

//*************

function Calculator() {

    this.read = function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//*********************

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('How much to add?', 0);
    };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);