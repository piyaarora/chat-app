import React from 'react'

export const Input = ({ setMessage, sendMessage, message }) => {
    return (
        <form id="chat-form">
            <input
                type="text"
                id="msg"
                // className="input"
                value={message}
                onChange={({ target: { value } }) => setMessage(value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                placeholder="Enter Message"
                required

            />
            <i className="fa fa-paperclip attachment" aria-hidden="true" />
            <button className="submit btn" onClick={event => sendMessage(event)}><i className="fa fa-paper-plane" aria-hidden="true" /></button>

            {/* <button className="btn" ><i className="fas fa-paper-plane"></i> Send</button> */}
        </form>
    )
}
export default Input