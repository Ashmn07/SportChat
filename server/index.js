const express = require('express');
const socketio =require('socket.io');
const http = require('http');
const router = require('./router')

const PORT = process.env.PORT || 5000

const app = express();
app.use(router)
const server = http.createServer(app)
const io = socketio(server)

io.on('connection',(socket)=>{
    console.log("We have connection")
    socket.on('disconnect',()=>{
    console.log("User had left")        
    })
})

server.listen(PORT,() => console.log(`Server has started on ${PORT}`))