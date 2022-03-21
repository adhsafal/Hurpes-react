import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from '../pages/ContactUs'
import Home from '../pages/Home'
import PressRelease from '../pages/PressRelease'

const RouteLists = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/pressRelease' element={<PressRelease />} />
        </Routes>
    )
}

export default RouteLists