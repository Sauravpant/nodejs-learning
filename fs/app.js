const fs = require('fs');

fs.readdir("./", (err, res) => {
  try {
    if (res) {
      console.log("Result " + res)
    } else {
      throw new Error(err);
    }
  } catch (err) {
    console.log(err);
  }
})

fs.readFile('./data.txt', (err, res) => {
  if (err)
    console.log(err);
  else
    console.log("Data: " + res);
})

const data = "Hello world";

fs.writeFile("./data.txt", data, (err) => {
  if (err)
    console.log("Error: " + err)
  else
    console.log("Data saved to the file");
})

fs.appendFile("./data.txt", " My name is saurav ", (err) => {
  if (err)
    console.log("Error: " + err)
  else
    console.log("Data apppended to the file");
})