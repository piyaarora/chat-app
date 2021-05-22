import React from 'react'
// import './test.css'

const Test = () => {
    return (
        <div id="frame">
            <div id="sidepanel">
                <div id="profile">
                    <div className="wrap">
                        <img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" className="online" alt="" />
                        <p>Members</p>
                    </div>
                </div>
                <div id="contacts">
                    <ul>
                        <li className="contact">
                            <div className="wrap">
                                {/* <span className="contact-status online" /> */}
                                <img src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
                                <div className="meta">
                                    <p className="name">Louis Litt</p>
                                    {/* <p className="preview">You just got LITT up, Mike.</p> */}
                                </div>
                            </div>
                        </li>
                        <li className="contact">
                            <div className="wrap">
                                {/* <span className="contact-status" /> */}
                                <img src="http://emilcarlsson.se/assets/jonathansidwell.png" alt="" />
                                <div className="meta">
                                    <p className="name">Jonathan Sidwell</p>
                                    {/* <p className="preview"><span>You:</span> That's bullshit. This deal is solid.</p> */}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content">
                <div className="contact-profile">
                    <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                    <p>Group name</p>
                    <div className="social-media">
                        <i className="fa fa-sign-out" aria-hidden="true"></i>
                        <span> Leave</span>
                    </div>
                </div>
                <div className="messages">
                    <ul>
                        <li className="sent">
                            <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                            <p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>
                        </li>
                        <li className="replies">
                            <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                            <p>When you're backed against the wall, break the god damn thing down.</p>
                        </li>

                    </ul>
                </div>
                <div className="message-input">
                    <div className="wrap">
                        <input type="text" placeholder="Write your message..." />
                        <i className="fa fa-paperclip attachment" aria-hidden="true" />
                        <button className="submit"><i className="fa fa-paper-plane" aria-hidden="true" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Test