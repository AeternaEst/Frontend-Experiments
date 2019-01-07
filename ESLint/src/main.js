
function foo (param) {
    function bar () {
        console.log(param + " world");
    }
    bar();
}

foo("hello");
