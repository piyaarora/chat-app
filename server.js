const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const { addUser, removeUser, getUser, getUserInRoom } = require('./users.js')

const router = require('./router');
// Set static folder
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.static('client/build'));
// app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))

app.use(router);

io.on('connection', (socket) => {
    console.log("we have new connection")

    socket.on('join', ({ name, room }, callback) => {
        console.log(name, room);

        // const error = true;
        // if (error) {
        //     callback({
        //         error: 'error'
        //     })
        // }
        // // const user = userJoin(socket.id, username, room);
    });
    //disconnect
    socket.on('disconnect', () => {
        console.log("User had left!!!")
    })
})




// const botName = 'ChatCord Bot';

// // Run when client connects
// io.on('connection', socket => {
//     socket.on('joinRoom', ({ username, room }) => {
//         const user = userJoin(socket.id, username, room);

//         socket.join(user.room);

//         // Welcome current user
//         socket.emit('message', formatMessage(botName, 'Welcome to ChatCord!'));

//         // Broadcast when a user connects
//         socket.broadcast
//             .to(user.room)
//             .emit(
//                 'message',
//                 formatMessage(botName, `${user.username} has joined the chat`)
//             );

//         // Send users and room info
//         io.to(user.room).emit('roomUsers', {
//             room: user.room,
//             users: getRoomUsers(user.room)
//         });
//     });

//     // Listen for chatMessage
//     socket.on('chatMessage', msg => {
//         const user = getCurrentUser(socket.id);

//         io.to(user.room).emit('message', formatMessage(user.username, msg));
//     });

//     // Runs when client disconnects
//     soc ket.on('disconnect', () => {
//         const user = userLeave(socket.id);

//         if (user) {
//             io.to(user.room).emit(
//                 'message',
//                 formatMessage(botName, `${user.username} has left the chat`)
//             );

//             // Send users and room info
//             io.to(user.room).emit('roomUsers', {
//                 room: user.room,
//                 users: getRoomUsers(user.room)
//             });
//         }
//     });
// });

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
