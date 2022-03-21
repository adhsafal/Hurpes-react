import React from 'react'

const News = () => {
    return (
        <>
            <div className="col-md-12 newsRow">
                <div className="newsLeft">
                    <img src="/images/newsOne.png" alt="News One" />
                    <div className="newsdate">
                        <span> December 21, 2021 </span>
                    </div>
                </div>
                <div className="newsRight">
                    <h3>
                        EU weighs changes to Covid certificates, travel rules during
                        surge
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Turpis ornare sagittis diam in rutrum eu quam. Mus gravida
                        faucibus massa eget mauris.Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Turpis ornare sagittis diam in
                        rutrum eu quam. Mus gravida faucibus massa eget mauris(......)
                        <span><a href="/PressRelease.html">Read more</a></span>
                    </p>
                    <div className="newsSocialMedia">
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
            </div>
        </>
    )
}

export default News