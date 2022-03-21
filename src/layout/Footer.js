import React from 'react'
import '../styles/style.css'


const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="quickContact">
                                <h5>Quick Contact</h5>
                                <ul>
                                    <li>
                                        <i className="fa-solid fa-location-dot"></i>
                                        <span>Keshari Marga-76, Kalikasthan, Nepal</span>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-phone"></i>
                                        <span>977-1-4420712</span>
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-envelope"></i>
                                        <span>chair.hurpes@gmail.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1 col-md-12">
                            <div className="latestPrograms">
                                <h5>Latest Programs</h5>
                                <ul>
                                    <li>
                                        <span>
                                            प्रधानन्यायाधीशको राजिनामा/बर्हिगमनको माग गर्दै शान्ति
                                            समाजको जुलुस…
                                        </span>
                                    </li>
                                    <li>
                                        <span>शान्ति समाजद्वारा १६ स्रष्टाहरुलाई पुरस्कार अर्पण</span>
                                    </li>
                                    <li>
                                        <span>प्रधानन्यायाधीश राणाले शिघ्र राजिनामा दिनुपर्छ</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-12">
                            <div className="footer_socialMedia">
                                <ul>
                                    <li>
                                        <i className="fa-brands fa-facebook"></i>
                                    </li>
                                    <li>
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </li>
                                    <li>
                                        <i className="fa-brands fa-instagram"></i>
                                    </li>
                                    <li>
                                        <i className="fa-brands fa-twitter"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="lowerFooter">
                        <span>Copyright © 2017 HURPEES. All Rights Reserved. </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer