import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';
import Input from './Input';
import { Fragment } from "react";
import { Link } from "react-router-dom";
import avatar from '../images/avatar.png'
import group from '../images/group.webp'

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'https://gupshupp.herokuapp.com/'

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

        <div className="container">
            <div id="frame">
                <div id="sidepanel">
                    <div id="profile">
                        <div className="wrap">
                            <img id="profile-img" src={group} className="online" alt="" style={{ background: '#e6eaea' }} />
                            <p>Members</p>
                        </div>
                    </div>
                    <div id="contacts">
                        <ul>
                            {
                                users ? (
                                    <Fragment>
                                        {users.map(({ name }) => (


                                            <li className="contact" key={name}>
                                                <div className="wrap">
                                                    <img src={avatar} alt="" />
                                                    <div className="meta">
                                                        <p className="name">{name}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                        }
                                    </Fragment>

                                ) : null
                            }
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <div className="contact-profile">
                        <p><strong>Gupshup: </strong> {room}</p>
                        <Link to="/" className="btn">
                            <div className="social-media">
                                <i className="fa fa-sign-out" aria-hidden="true"></i>
                         Leave
                    </div>
                        </Link>
                    </div>
                    <div className="messages">
                        <ul>
                            {messages.map((message, i) => <div key={i}>
                                <Message message={message} name={name} />
                            </div>
                            )}

                        </ul>
                    </div>
                    <div className="message-input">
                        <div className="wrap">
                            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}
export default Chat