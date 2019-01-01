//get a reference to the file system module
var fs = require('fs');
 
//get a reference to the uglify-js module
var UglifyJS = require('uglify-js');

//Options
var options = {
    sourceMap: {
        url: "main.js.map",
        root: "./../"
    }
}
 
//get a reference to the minified version of file-1.js
var result = UglifyJS.minify(["./src/helloworld.js", "./src/anotherhello.js"], options);
 
//view the output
console.log(result);
console.log(result.map);  // source map
 
fs.writeFile("./dest/main.js", result.code, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("File was successfully saved.");
    }
});

// fs.writeFile("./dest/main.js.map", result.map, function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Sourcemap File was successfully saved.");
//     }
// });

