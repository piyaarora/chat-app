import React from 'react'
import moment from 'moment'
// import moment from 'react-moment'
import User from '../images/user.png'

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
        <ul>
            {
                isSentByCurrentUser ? (
                    <li className="replies">
                        <div style={{ fontSize: '12px', padding: '5px', textAlign: 'end' }}>{trimmedName}</div>

                        <img src={User} alt="" />
                        <p>{text}</p>
                    </li>
                ) :
                    <li className="sent">
                        <div style={{ fontSize: '12px', padding: '5px' }}>{user}</div>

                        <img src={User} alt="" />
                        <p>{text}</p>
                    </li>

            }
        </ul>

    )

}

export default Message