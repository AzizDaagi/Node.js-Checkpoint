// 1-
console.log("HELLO WOLRD")
// Server creation
const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end("<h1>Hello Node!!!!</h1>\n");
})
server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000 !");
})
// File system
const fs = require("fs")
fs.writeFile("welcome.txt", "Hello node", (err) => {
    if(err){
        console.error(err)
    }else console.log("The file has been created")
})
fs.readFile("welcome.txt", (err, data) => {
    if(err){
        console.error(err)
    }else console.log("The file contains:", data.toString())
})
