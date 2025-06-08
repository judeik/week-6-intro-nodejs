// const a = 4
// const b = 9

// const answer = a * b
// console.log(answer);

// IP Address: How you connect to a server. It is listenting to a request that is made through particular port or channel. If you want it to listening to you you have to make that port available. 

// Domain

// Port: Is a channel to connect to your server. It must be secrte

// http -> Insecured

// https -> Secured

// How to Setup server

// i. install express => npm i express or npm install express
// a. Dependencies: Any thing that our backend depend on inother to run.
// b. Dev Dependencies: Are those dependencies we only need while we are developing. When a project is deployed those dependencies becomes irrelevant.
// c. Global Dependencies: Are those dependencies we install on our computer. e.g. node

const express = require("express")

const app = express()

// Second method in one single line
// const app = require("express")()

app.listen(5000)