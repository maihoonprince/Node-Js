// File handling simply means creating(Performing) operation on files.
// fs module is already built in module in node js.
// fs module enables us to interact  with file system.

const fs = require("fs");

// How to create a file and write in it :-

// Syncronous 
// sync always return a result.
fs.writeFileSync('./test.txt', 'Hey, There i am file handling.');

// Async
// Async doesn't return anything , it always expect a call back function in which it through error and result.
fs.writeFile("./test.txt", "Hey, There i am file handling. i am Asymc Function", (err) => {});

// How to read a file :-
const result = fs.readFileSync("./contact.txt", "utf-8");
console.log(result);

fs.readFile("./contact.txt", "utf-8",(err, result) =>{
    if(err){
        console.log("Error: ", err);
    }
    else{
        console.log(result);
    }
})


// How to append our files:-

fs.appendFileSync("./test.txt", ` Hey, There\n`);
fs.appendFileSync("./test.txt", `${Date.now()} Hey, There\n`);

// How to copy file data to other file :-

fs.cpSync("./test.txt", "./copy.txt");

// How to delete a file:-
fs.unlinkSync("./copy.txt");

// How to print stats of any file:-
console.log(fs.statSync("./test.txt").isFile()); 

// Directory
fs.mkdirSync("my-docs");
fs.mkdirSync("my-docss/a/b", { recursive: true });


// We can do many things with file by the help of node js.
// We can only perform file handling in node js, due to privacy reason we can not perform file handling in javaScript. 