const express = require("express")
const app = express()

app.get("/", function(req, res){
 res.send("Welcome to the Jungle!")
})

app.get("/test", function(req, res){
 res.send("testing...")
})

app.listen(9090, function(){
 console.log("Servidor OK")
})

