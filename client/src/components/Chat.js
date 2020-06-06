import React, { useEffect, useState } from 'react'
import queryString from 'query-string';
import io from 'socket.io-client'



const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000'

    useEffect(() => {
        const { name, room } = queryString.parse(location.search)
        let socket = io(ENDPOINT)

        setName(name);
        setRoom(room);
        console.log(socket)
        socket.emit('join', { name, room }, ({ error }) => {
            console.log(error)
        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
        // const data = queryString.parse(location.search)
        // console.log(location.search);
        // console.log(name, room);
    }, [ENDPOINT, location.search])

    return (
        <div className="chat-container">
            <header className="chat-header">
                <h1><i className="fas fa-smile"></i> ChatCord</h1>
                <a href="index.html" className="btn">Leave Room</a>
            </header>
            <main className="chat-main">
                <div className="chat-sidebar">
                    <h3><i className="fas fa-comments"></i> Room Name:</h3>
                    <h2 id="room-name">JavaScript</h2>
                    <h3><i className="fas fa-users"></i> Users</h3>
                    <ul id="users">
                        <li>Brad</li>
                        <li>John</li>
                        <li>Mary</li>
                        <li>Paul</li>
                        <li>Mike</li>
                    </ul>
                </div>
                <div className="chat-messages">
                    <div className="message">
                        <p className="meta">Brad <span>9:12pm</span></p>
                        <p className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
                            repudiandae.
						</p>
                    </div>
                    <div className="message">
                        <p className="meta">Mary <span>9:15pm</span></p>
                        <p className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
                            repudiandae.
						</p>
                    </div>
                </div>
            </main>
            <div className="chat-form-container">
                <form id="chat-form">
                    <input
                        id="msg"
                        type="text"
                        placeholder="Enter Message"
                        required
                        autocomplete="off"
                    />
                    <button className="btn"><i className="fas fa-paper-plane"></i> Send</button>
                </form>
            </div>
        </div>

    )
}
export default Chat