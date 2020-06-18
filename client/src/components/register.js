import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('')

    return (
        <div className="join-container">
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
        </div>
    )
}
export default Register