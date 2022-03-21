import React from 'react'
import Banner from './Banner'
import Events from './Events'
import Glances from './Glances'
import HumanRights from './HumanRights'
import Programs from './Programs'

const Homepage = () => {
    return (
        <>
            <Banner />
            <HumanRights />
            <Programs />

            <section className="events_glances">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 uEvents">
                            <Events />
                        </div>
                        <div className="col-lg-6 col-md-12 uEvents hGlances position-relative">
                            <Glances />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage