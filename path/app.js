const path = require('path');
const res = path.parse(__filename)
const obj = path.parse(__dirname)
console.log(obj)
console.log(res);
console.log(path.basename("C:\\users\\x\\documents\\resume.pdf"))  // resume.pdf
console.log(path.dirname("C:\\users\\x\\documents\\resume.pdf")) // C:\users\x\documents
console.log(path.extname("C:\\users\\x\\documents\\resume.pdf")) //.pdf
console.log(path.format({
  root: 'D:\\',
  dir: 'D:\\Backend\\node\\path',
  base: 'app.js',
})) //opposite of path.parse() . Returns a  path string from the provided object

console.log(path.join("/src","/components","app.jsx")) // \src\components\app.jsx