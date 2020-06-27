import React from 'react'
import moment from 'moment'
// import moment from 'react-moment'

// let date = new Date()
// let time = zero(time.getHours()) + ':' + zero(time.getMinutes());
// 
let time = moment().format('h:mm a')
const Message = ({ message: { text, user }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }
    return (
        isSentByCurrentUser ?
            (
                <div className="chat-message-container justify-end">
                    <p className="sentText pr-10"> {trimmedName} </p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">
                            {text}
                        </p>
                        <span className="colorlightest"> {time}</span>
                    </div>
                </div>
            ) :
            (
                <div className="chat-message-container justify-start">
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{text}</p> <span className="colorlightDark"> {time} </span>
                    </div>
                    <p className="sentText pl-10">
                        {user}
                    </p>

                </div>
            )
    )

}

export default Message