const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const router = require('./router.js');

const {addUser, removeUser, getUser, getUserInRoom} = require('./users.js')



app.use(router);





// io.on runs when we have a client connection on the server(to be spefic io instance)
io.on('connection',(socket)=>{

    socket.on('join',({name,room},callback)=>{
        const {error,user} = addUser({id: socket.id,name,room});
        if(error)
            callback();

        socket.emit('message',{user:'admin', text:`${user.name}, welcome to the room ${user.room}`});
        socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name}, has joined the room`});
        const users = getUserInRoom(room);
        
        setTimeout(()=>{
            io.to(user.room).emit('roomData', { room: user.room, users });
        },100)
        socket.join(user.room);
    })
    socket.on('sendMessage',(message,callback)=>{
        const user = getUser(socket.id);
        io.to(user.room).emit('message',{ user: user.name, text: message});
        callback(); 
        
    })
    
    //ends the socket connection
    socket.on('disconnect',()=>{
        const user = getUser(socket.id);
        removeUser(socket.id);
        io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room) });
    });
});






const PORT = process.PORT||5000;
server.listen(PORT, function(){
    console.log(`Server Started at Port: ${PORT}`);
})