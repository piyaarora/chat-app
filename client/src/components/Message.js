import React, { Fragment } from 'react'

const Message = ({ message: { text, user }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }
    return (
        isSentByCurrentUser ?
            (
                <Fragment>
                    <p className="meta">{trimmedName} <span>9:12pm</span></p>
                    <p className="text">
                        {text}
                    </p>
                </Fragment>
            ) :
            (
                <>
                    <p className="meta">{user} <span>9:12pm</span></p>
                    <p className="text">
                        {text}
                    </p>
                </>
            )
    )

}

export default Message