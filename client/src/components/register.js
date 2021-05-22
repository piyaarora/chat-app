import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import chatting from '../images/chatting'

const Register = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('')

    return (
        <>
            <main>
                <span className="form">
                    <div className="title">
                        <h1 id="title">Gupshup</h1>
                        <p id="description">A room to discuss things and share thoughts.</p>
                    </div>
                    <form id="survey-form">
                        <label htmlFor="name" id="name-label" className="uno">Username</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter username..."
                            required
                            onChange={(event) => setName(event.target.value)}
                        />

                        {/* <input type="text" id="name" placeholder="Enter your name" requiered /> */}
                        <label htmlFor="age" id="number-label" className="uno">Room name</label>
                        <input
                            type="text"
                            name="room"
                            id="room"
                            placeholder="Enter room..."
                            required
                            onChange={(event) => setRoom(event.target.value)}
                        />
                        {/* <input type="number" id="number" placeholder="Enter your age" /> */}
                        <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/Chat?name=${name}&room=${room}`}>
                            <button type="submit" className="join uno" >Join Chat</button>
                        </Link>
                        {/* <button type="submit" id="submit" className="submit uno">Send your application</button> */}
                    </form>
                </span></main>

            {/* <div className="join-container">
                <div className="join-bg">
                    <header className="join-header">
                        <h1>Chat Room <i className="fas fa-smile"></i></h1>
                    </header>
                    <main className="join-main">
                        <form action="chat.html">
                            <div className="form-control">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter username..."
                                    required
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </div>
                            <div className="form-control">
                                <label htmlFor="username">Room</label>
                                <input
                                    type="text"
                                    name="room"
                                    id="room"
                                    placeholder="Enter room..."
                                    required
                                    onChange={(event) => setRoom(event.target.value)}
                                />
                            </div>

                            <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/Chat?name=${name}&room=${room}`}>
                                <button type="submit" className="btn">Join Chat</button>
                            </Link>
                        </form>
                    </main>
                </div>
            </div> */}
        </>
    )
}
export default Register