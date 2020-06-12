import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('')

    return (
        <div className="join-container">
            <header className="join-header">
                <h1><i className="fas fa-smile"></i>Chat Room</h1>
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

                    <div className="form-control">
                        <label htmlFor="room">Room</label>
                        <select name="room" id="room">
                            <option value="JavaScript">JavaScript</option>
                            <option value="Python">Python</option>
                            <option value="PHP">PHP</option>
                            <option value="C#">C#</option>
                            <option value="Ruby">Ruby</option>
                            <option value="Java">Java</option>
                        </select>
                    </div>
                    <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/Chat?name=${name}&room=${room}`}>
                        <button type="submit" className="btn">Join Chat</button>
                    </Link>
                </form>
            </main>

        </div>
    )
}
export default Register