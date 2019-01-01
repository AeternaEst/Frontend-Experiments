function outer(outerParam) {
    function inner(innerParam) {
        console.log(outerParam + " " + innerParam);
    }
    inner("world");
}

outer("hello");