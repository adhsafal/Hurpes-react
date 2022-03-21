import React from 'react'

const Location = () => {
    return (
        <>
            <div className="col-md-6 contactCol contactcolTwo">
                <div className="locationContents">
                    <h3>See location</h3>
                    <ul>
                        <li>
                            <i className="fa-solid fa-location-dot"></i>
                            <span>Keshari Marga-76, Kalikasthan, Nepal</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-phone"></i>
                            <span>977-1-4420712</span>
                        </li>
                        <li id="lastIcon">
                            <i className="fa-regular fa-envelope"></i>
                            <span>chair.hurpes@gmail.com</span>
                        </li>
                    </ul>
                    <img id="map" src="/images/Map.png" alt="Map" />
                </div>
            </div>
        </>
    )
}

export default Location