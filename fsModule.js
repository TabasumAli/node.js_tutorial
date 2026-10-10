const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'info.txt');
fs.writeFileSync(filePath, "Hello from node js");
const data = fs.readFileSync(filePath, 'utf-8');
console.log(data);