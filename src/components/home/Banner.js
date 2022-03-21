import React from 'react'
import '../../styles/style.css'


const Banner = () => {
    return (
        <>
            <section className="banner">
                <div className="banner_slider">
                    <div>
                        <div className="first_slide">
                            <div className="slide_overlay"></div>
                            <img src="images/bannerImg.png" alt="banner" />
                            <img
                                className="mainGradient"
                                src="images/mainGradient.png"
                                alt="gradient"
                            />
                            <div className="slide_texts">
                                <h1>human rights & peace society nepal</h1>
                                <p>
                                    HURPES contributed significantly in pro-democracy movement 2006
                                    and to establish democratic republic in Nepal.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <div className="second_slide">
                            <div className="slide_overlay"></div>
                            <img src="images/bannerImg.png" alt="banner" />
                            <img
                                className="mainGradient"
                                src="images/mainGradient.png"
                                alt="gradient"
                            />

                            <div className="slide_texts">
                                <h1>human rights & peace society nepal</h1>
                                <p>
                                    HURPES contributed significantly in pro-democracy movement 2006
                                    and to establish democratic republic in Nepal.
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Banner