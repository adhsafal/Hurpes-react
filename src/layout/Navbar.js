import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'

const Navbar = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <img src="../images/logo.png" alt="logo" />
                </div>
                <div className="canvas">
                    <div className="responsive_navbar_icon">
                        <a
                            className="btn"
                            data-bs-toggle="offcanvas"
                            href="#offcanvasExample"
                            role="button"
                            aria-controls="offcanvasExample"
                        >
                            <i className="fa-solid fa-bars"></i>
                        </a>
                    </div>
                    <div
                        className="offcanvas offcanvas-start"
                        tabindex="-1"
                        id="offcanvasExample"
                        aria-labelledby="offcanvasExampleLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                            <button
                                type="button"
                                className="btn-close text-reset"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="dropdown mt-3">
                                <div className="navbar_innerSection">
                                    <ul>
                                        <li><a href="/index.html">Home</a></li>
                                        <li><a href="/News.html">Press release</a></li>
                                        <li><a href="/Campaign.html">Campaigns</a></li>
                                        <li className="dropdown">
                                            <a
                                                href="/LiteraryAward.html"
                                                data-bs-toggle="dropdown"
                                                className="dropdown-toggle"
                                            >Hurpes award
                                            </a>
                                            <div className="dropdown-menu award">
                                                <div className="menuPointer"></div>
                                                <a href="/LiteraryAward.html" className="dropdown-item"
                                                ><i className="fa-solid fa-award"></i>
                                                    Literary award
                                                </a>

                                                <a href="/ServiceAwards.html" className="dropdown-item">
                                                    <i className="fa-solid fa-award"></i>
                                                    Social Service award
                                                </a>
                                            </div>
                                        </li>
                                        <li className="dropdown">
                                            <a
                                                href="#"
                                                data-bs-toggle="dropdown"
                                                className="dropdown-toggle"
                                            >Publications</a
                                            >
                                            <div className="dropdown-menu publications">
                                                <div className="menuPointer"></div>

                                                <a href="/HurpesBook.html" className="dropdown-item">
                                                    <i className="fa-solid fa-book"></i>
                                                    Hurpes Book
                                                </a>

                                                <a href="/ResearchReport.html" className="dropdown-item">
                                                    <i className="fa-solid fa-file"></i>
                                                    Research Report
                                                </a>
                                            </div>
                                        </li>
                                        <li className="dropdown">
                                            <a
                                                href="#"
                                                data-bs-toggle="dropdown"
                                                className="dropdown-toggle"
                                            >About us
                                            </a>
                                            <div className="dropdown-menu about">
                                                <div className="menuPointer"></div>

                                                <a href="/Gallery.html" className="dropdown-item">
                                                    <i className="fa-solid fa-image"></i> Gallery
                                                </a>

                                                <a href="/Objectives.html" className="dropdown-item">
                                                    <i className="fa-solid fa-heart"></i> Objectives
                                                </a>

                                                <a href="/FoundingMembers.html" className="dropdown-item">
                                                    <i className="fa-solid fa-user"></i> Founder Member
                                                </a>

                                                <a href="/Transparency.html" className="dropdown-item">
                                                    <i className="fa-solid fa-eye"></i> Transparency
                                                </a>

                                                <a href="/Policy.html" className="dropdown-item">
                                                    <i className="fa-regular fa-file-lines"></i> Hurpes Policy
                                                </a>

                                                <a href="/PastCommittee.html" className="dropdown-item">
                                                    <i className="fa-solid fa-user"></i>
                                                    Past Committee
                                                </a>

                                                <a href="/HurpesGlance.html" className="dropdown-item">
                                                    <i className="fa-solid fa-briefcase"></i> Hurpes at Glance
                                                </a>
                                            </div>
                                        </li>
                                        <li className="dropdown">
                                            <a
                                                href="#"
                                                data-bs-toggle="dropdown"
                                                className="dropdown-toggle"
                                            >Organizational structure</a
                                            >
                                            <div className="dropdown-menu structure">
                                                <div className="menuPointer"></div>

                                                <a href="/Introduction.html" className="dropdown-item">
                                                    <i className="fa-solid fa-user-plus"></i>Introduction
                                                </a>

                                                <a
                                                    href="/CentralExecutiveCommittee.html"
                                                    className="dropdown-item d-flex align-items-center"
                                                >
                                                    <i className="fa-solid fa-user"></i>
                                                    Central Executive <br />Committee
                                                </a>

                                                <a href="/Coordinators.html" className="dropdown-item">
                                                    <i className="fa-solid fa-user"></i>
                                                    National Coordinators
                                                </a>

                                                <a
                                                    href="/District.html"
                                                    className="dropdown-item d-flex align-items-center"
                                                >
                                                    <i className="fa-solid fa-user"></i>
                                                    District Committee <br />Members
                                                </a>

                                                <a href="/LifeMembers.html" className="dropdown-item">
                                                    <i className="fa-solid fa-user"></i>
                                                    Hurpes Life Members
                                                </a>

                                                <a
                                                    href="#"
                                                    className="dropdown-item d-flex align-items-center"
                                                >
                                                    <i className="fa-solid fa-download"></i> Download
                                                    <br />Membership Form
                                                </a>

                                                <a
                                                    href="#"
                                                    className="dropdown-item d-flex align-items-center"
                                                >
                                                    <i className="fa-solid fa-download"></i> Download District
                                                    <br />Committee Form
                                                </a>

                                                <a
                                                    href="#"
                                                    className="dropdown-item d-flex align-items-center"
                                                >
                                                    <i className="fa-solid fa-download"></i>
                                                    <div>Download Youth <br />Membership Form</div>
                                                </a>
                                            </div>
                                        </li>
                                        <li><a href="/Contact.html">Contact us</a></li>
                                    </ul>
                                </div>

                                <div className="canvas_lowerContent">
                                    <a className="emailid" href="#">needhelp@hurpes.com</a>
                                    <a className="numb" href="#">888 999 0000</a>
                                    <div className="canvas_socialMedia">
                                        <ul>
                                            <li>
                                                <i className="fab fa-twitter"></i>
                                            </li>
                                            <li>
                                                <i className="fab fa-facebook"></i>
                                            </li>
                                            <li>
                                                <i className="fab fa-pinterest"></i>
                                            </li>
                                            <li>
                                                <i className="fab fa-youtube"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top_section">
                    <div className="email_socialMedia">
                        <div className="email_Number_section">
                            <div className="email">
                                <div className="coolicon">
                                    <img src="/images/coolicon.svg" alt="coolicon" />
                                </div>
                                <div className="emailText">
                                    <p>hurpes@gmail.com</p>
                                </div>
                            </div>
                            <div className="phn_number">
                                <div className="phnIcon">
                                    <img src="/images/Vector.svg" alt="Phone" />
                                </div>
                                <div className="phoneText">
                                    <p>(977)-14420712</p>
                                </div>
                            </div>
                        </div>
                        <div className="socialMedia">
                            <ul>
                                <li>
                                    <img src="/images/cooliconfacebook.png" alt="facebook" />
                                </li>
                                <li>
                                    <img src="/images/cooliconTwitter.svg" alt="twitter" />
                                </li>
                                <li>
                                    <img src="/images/cooliconlinkedin.svg" alt="linkedIn" />
                                </li>
                                <li>
                                    <img src="/images/cooliconYoutube.svg" alt="youTube" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar">
                        <div className="navbar_innerSection">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/pressRelease">Press release</Link></li>
                                <li><a href="/Campaign.html">Campaigns</a></li>
                                <li className="dropdown">
                                    <a
                                        href="/LiteraryAward.html"
                                        data-bs-toggle="dropdown"
                                        className="dropdown-toggle"
                                    >Hurpes award
                                    </a>
                                    <div className="dropdown-menu award">
                                        <div className="menuPointer"></div>
                                        <a href="/LiteraryAward.html" className="dropdown-item"
                                        ><i className="fa-solid fa-award"></i>
                                            Literary award
                                        </a>

                                        <a href="/ServiceAwards.html" className="dropdown-item">
                                            <i className="fa-solid fa-award"></i>
                                            Social Service award
                                        </a>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a href="#" data-bs-toggle="dropdown" className="dropdown-toggle"
                                    >Publications</a
                                    >
                                    <div className="dropdown-menu publications">
                                        <div className="menuPointer"></div>

                                        <a href="/HurpesBook.html" className="dropdown-item">
                                            <i className="fa-solid fa-book"></i>
                                            Hurpes Book
                                        </a>

                                        <a href="/ResearchReport.html" className="dropdown-item">
                                            <i className="fa-solid fa-file"></i>
                                            Research Report
                                        </a>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a href="#" data-bs-toggle="dropdown" className="dropdown-toggle"
                                    >About us
                                    </a>
                                    <div className="dropdown-menu about">
                                        <div className="menuPointer"></div>

                                        <a href="/Gallery.html" className="dropdown-item">
                                            <i className="fa-solid fa-image"></i> Gallery
                                        </a>

                                        <a href="/Objectives.html" className="dropdown-item">
                                            <i className="fa-solid fa-heart"></i> Objectives
                                        </a>

                                        <a href="/FoundingMembers.html" className="dropdown-item">
                                            <i className="fa-solid fa-user"></i> Founder Member
                                        </a>

                                        <a href="/Transparency.html" className="dropdown-item">
                                            <i className="fa-solid fa-eye"></i> Transparency
                                        </a>

                                        <a href="/Policy.html" className="dropdown-item">
                                            <i className="fa-regular fa-file-lines"></i> Hurpes Policy
                                        </a>

                                        <a href="/PastCommittee.html" className="dropdown-item">
                                            <i className="fa-solid fa-user"></i>
                                            Past Committee
                                        </a>

                                        <a href="/HurpesGlance.html" className="dropdown-item">
                                            <i className="fa-solid fa-briefcase"></i> Hurpes at Glance
                                        </a>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a href="#" data-bs-toggle="dropdown" className="dropdown-toggle"
                                    >Organizational structure</a
                                    >
                                    <div className="dropdown-menu structure">
                                        <div className="menuPointer"></div>

                                        <a href="/Introduction.html" className="dropdown-item">
                                            <i className="fa-solid fa-user-plus"></i>Introduction
                                        </a>

                                        <a
                                            href="/CentralExecutiveCommittee.html"
                                            className="dropdown-item d-flex align-items-center"
                                        >
                                            <i className="fa-solid fa-user"></i>
                                            Central Executive <br />Committee
                                        </a>

                                        <a href="/Coordinators.html" className="dropdown-item">
                                            <i className="fa-solid fa-user"></i>
                                            National Coordinators
                                        </a>

                                        <a
                                            href="/District.html"
                                            className="dropdown-item d-flex align-items-center"
                                        >
                                            <i className="fa-solid fa-user"></i>
                                            District Committee <br />Members
                                        </a>

                                        <a href="/LifeMembers.html" className="dropdown-item">
                                            <i className="fa-solid fa-user"></i>
                                            Hurpes Life Members
                                        </a>

                                        <a href="#" className="dropdown-item d-flex align-items-center">
                                            <i className="fa-solid fa-download"></i> Download
                                            <br />Membership Form
                                        </a>

                                        <a href="#" className="dropdown-item d-flex align-items-center">
                                            <i className="fa-solid fa-download"></i> Download District
                                            <br />Committee Form
                                        </a>

                                        <a href="#" className="dropdown-item d-flex align-items-center">
                                            <i className="fa-solid fa-download"></i>
                                            <div>Download Youth <br />Membership Form</div>
                                        </a>
                                    </div>
                                </li>
                                <li><Link to="/contact">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar