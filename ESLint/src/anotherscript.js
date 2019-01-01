
class Animal {
    constructor(name) {
        this.name = name;
    }
    log() {
        console.log("My name is " + this.name);
    }
}

var animal = new Animal("kitty");
animal.log();