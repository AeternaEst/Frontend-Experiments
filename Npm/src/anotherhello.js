
function Cat(name) {
    this.name = name;
    this.helloCat = function() {
        console.log("hello  " + this.name);
    }
}

var cat = new Cat("Kitty");

cat.helloCat();