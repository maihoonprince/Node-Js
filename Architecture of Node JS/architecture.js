// Architecture of Node JS :-

// Process:-
// 1. Client
// 2. eventQueue
// 3. Event Loop 
// 4. Blocking(Sync) and Non-Blocking(Async) Operation.
// 5. If the operartion is non-blocking then server returnd result at the moment.
// 6. if the operation is blocking then loop order to thread pool for a thread(Worker) and make him work and return the result. 
// 7. By Default there are 4 thread present.
// *  Default Thread Pool Size = 4.
// *  Max ? -Depends on cpu (8 Core cpu have maximum 8 threads).


// Dis-Advantage of Writing code in Blocking :-

// It is not good practice to write code in blocking Operation.
// It increase servere waiting time that will lead to server crash due to many requests.
// It happens because blocking depends on availability of Threads.


// Example:
const fs = require("fs");


// Sync (Blocking Operation)
// fs.writeFileSync("./test.txt", "Hello I am Prince");

// Async (Non-Blocking Operation)
// fs.writeFile("./test.txt", "Hello I am Node Js", (err) => {})


console.log("1");
// Blocking Operation
const result = fs.readFileSync("./number.txt", "utf-8");
console.log(result);

console.log("2");

console.log("1");
// Non - Blocking Operation
const result2 = fs.readFile("./number.txt", "utf-8", (err, result) => {
    console.log(result);
});

console.log("2");
console.log("3");
console.log("4");



// How to find max number of thread present in your cpu ?
const os = require("os");

console.log(os.cpus().length);