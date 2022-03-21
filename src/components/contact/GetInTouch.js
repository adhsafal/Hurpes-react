import React from 'react'

const GetInTouch = () => {
    return (
        <>
            <div className="col-md-6 contactCol">
                <div className="contactForm">
                    <h3>Get in Touch</h3>
                    <p>Full Name</p>
                    <input type="text" />
                    <p>Email</p>
                    <input type="text" />
                    <p>Message</p>
                    <input id="pass" type="text" />
                    <button>Create Account</button>
                </div>
            </div>
        </>
    )
}

export default GetInTouch