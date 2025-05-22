import React, { useState } from 'react'

const Navbar = () => {

    const [isPopupLinksVisible, setIsPopupLinksVisible] = useState(false)
    const handleNavLinks = () => {
        setIsPopupLinksVisible(!isPopupLinksVisible)
    }

    return (
        <div className="">
            <div className="absolute top-0 left-0 w-full flex justify-between items-center pt-10 px-5 z-20 bg-transparent">
                <img src="/images/logo.svg" alt="logo-image"/>

                <img src="/images/icon-hamburger.svg" alt="menu-image" onClick={handleNavLinks} className='md:hidden'/>

                <div className="md:flex justify-center items-center gap-10 text-white font-barlow hidden">
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#projects">Projects</a>
                    <a href="" className='font-fraunces uppercase text-very-dark-desaturated-blue font-semibold bg-white px-10 py-5 rounded-full'>Contact</a>
                </div>

            </div>

            <div className={`w-full flex justify-center items-center ${isPopupLinksVisible ? '' : 'hidden'}`}>
                <div className="nav-links absolute z-10 w-[90%] bg-white h-[300px] flex flex-col justify-center items-center gap-10 font-barlow font-bold text-grayish-blue top-32">
                    <a href="#about" onClick={handleNavLinks}>About</a>
                    <a href="#services" onClick={handleNavLinks}>Services</a>
                    <a href="#projects" onClick={handleNavLinks}>Projects</a>
                    <a href="" onClick={handleNavLinks}>Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;