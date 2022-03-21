import React from 'react'
import Banner from './Banner'
import '../../styles/style.css'
import GetInTouch from './GetInTouch'
import Location from './Location'


const ContactPage = () => {
    return (
        <>
            <section className="campaignWrapper">
                <Banner />
                <div className="contactUs">
                    <div className="container-fluid contactContainer">
                        <div className="row">
                            <GetInTouch />
                            <Location />
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default ContactPage