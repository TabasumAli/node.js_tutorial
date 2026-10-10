// // console.log("jaskldfasdf");
// const greet = (name) => "Welcome" + " " + name; "Hellasdfadfasdfasdo";


// const name = greet("Ahmad")

// console.log(name)
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'info.txt');
fs.writeFileSync(filePath, "Hello from node js");
const data = fs.readFileSync(filePath, 'utf-8');
console.log(data);