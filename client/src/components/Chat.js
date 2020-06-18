import React, { useState, useEffect, Fragment } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';
import Input from './Input';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'localhost:5000'

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setRoom(room);
        setName(name)

        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error);
            }
        });
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [...messages, message]);
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <div className="chat-container">
            <header className="chat-header">
                <h1><i className="fas fa-smile"></i> Chat App</h1>
                <a href="/" className="btn">Leave Room</a>
            </header>
            <main className="chat-main">
                <div className="chat-sidebar">
                    <h3><i className="fas fa-comments"></i> Room Name:</h3>
                    <h2 id="room-name">{room}</h2>
                    <h3><i className="fas fa-users"></i> Users</h3>
                    <ul id="users">
                        {
                            users ? (<div>
                                {users.map(({ name }) => (
                                    <li key={name}>
                                        {name}
                                    </li>
                                ))}

                            </div>)
                                :
                                null
                        }

                    </ul>
                </div>
                <div>

                    <ScrollToBottom className="chat-messages">
                        {messages.map((message, i) => <div key={i}>
                            <Message message={message} name={name} />
                        </div>
                        )}

                    </ScrollToBottom>
                </div>

            </main>
            <div className="chat-form-container">
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />

            </div>
        </div>

    )
}
export default Chat