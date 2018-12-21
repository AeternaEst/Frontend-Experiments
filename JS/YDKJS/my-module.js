
export function getContent() {
    return inner(true);
}

export class MyClass {
    constructor(name) {
        this.name = name;
    }
    greetings() {
        console.log(inner(false) + " " + this.name);
    }
}
function inner(param) {
    return param ? "Content" : "Hello";
}

export default { MyClass, getContent }