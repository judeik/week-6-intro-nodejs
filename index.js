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

// Middleware: Is a function that runs in the middle
// Body Parser
app.use(express.json())     // It is simple mean take whatever code we give and convert it to JSON, the language you can understand.

const PORT = process.env.PORT || 5000  // Environmental veriables are those veriables that meant to be secret. e.g. backend password.

// Second method in one single line
// const app = require("express")()

app.listen(PORT, ()=>{
    console.log(`Server started running on ${PORT}`);
})

// RSET or RESTFUL API
// GET, POST, PUT, PATCH, DELETE

// ENDPOINTS: Is the name of the API
// Endpoints /all-user /edit-profile /edit-user-profile

// GET REQUEST
//  Request has three methods: body, params, query

// API
app.get("/test-server", (request, response)=>{
    response.send("Welcome to Careerex Server")
})

// For Proffessionaly 
app.get("/", (request, response)=>{
    response.send("Welcome to Careerex Server!")
})

// NOTE: response.send are both object and res.send(67784696346) can carry numbers 

app.get("/users", (request, response)=>{
    response.send("List of all users")
})

app.get("/allusers", (request, response)=>{
    const allusers = [
        {
            firstName: "Jude"
        },
        {
            lastName: "Ojobor"
        }
    ]
    
    // response.send(allusers)
    response.json(allusers)
})


// POST REQUEST
// app.post("/add-user", (req, res)=>{
//     console.log( req.body )

//     res.json("User saved successfully")
// })

// Sending a response to a user

app.post("/add-new-user", (req, res)=>{

    const newUser = req.body

    res.json({
        message: "User registered successfuly",
        newUser
    })
})