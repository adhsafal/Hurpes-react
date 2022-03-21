import React from 'react'
import Banner from './Banner'
import '../../styles/style.css'
import News from './News'


const PressReleasePage = () => {
    return (
        <>
            <section className="newsBanner">
                <Banner />
                <div className="newsContents">
                    <div className="container-fluid">
                        <div className="row">

                            {[...Array(5).keys()].map(index =>
                                <News />
                            )}

                        </div>
                        <div className="viewall">
                            <a href="#" data-bs-toggle="dropdown" className="dropdown-toggle"
                            >View All</a
                            >
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PressReleasePage