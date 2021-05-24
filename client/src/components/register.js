import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
                        <label htmlFor="age" id="number-label" className="uno">Room name</label>
                        <input
                            type="text"
                            name="room"
                            id="room"
                            placeholder="Enter room..."
                            required
                            onChange={(event) => setRoom(event.target.value)}
                        />
                        <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/Chat?name=${name}&room=${room}`}>
                            <button type="submit" className="join uno" >Join Chat</button>
                        </Link>
                    </form>
                </span>
            </main>
        </>
    )
}
export default Register