import React from 'react'
import './homeComp.css'
import HeaderImg from './header-img.jpg'
import RoofingIcon from "./House.png"
import WindowIcon from './WindowFrame.png'
import PlumbingIcon from './Plumbing.png'
import HVACIcon from './Heating.png'
import SolarIcon from './LEDLights.png'
import TVIcon from './retro-tv_hires.png'

const HomeComp = () => {
    return (
        <div>
            <div className="home-header-container">
                <div className='home-header'>
                    <h1 className='home-header-title'>TOP-RATED HOME IMPROVEMENT CONTRACTORS</h1>
                    <p className='home-header-sub-title'>We provide professional quotes for the following services in your surrounding area: moving, home security, home remodeling, roofing, HVAC and much more. From plumbing to cleaning services, you can trust our top-rated pros to help you with your next home improvement project.</p>
                </div>
                <div className="home-img-container">
                    <img className='home-img' src={HeaderImg} alt="header img" />
                </div>
            </div>


            <div className="our-services">
                <h1 className='our-services-title'>Our Services</h1>
                <div className="service-icons">
                    <div className="roofing service-icon-img-container">
                        <p className='our-service-title'>Roofing</p>
                        <img className='service-icon-img' src={RoofingIcon} alt="roofing" />
                    </div>
                    <div className="windows service-icon-img-container">
                        <p className='our-service-title'>Windows</p>
                        <img className='service-icon-img' src={WindowIcon} alt="window" />
                    </div>
                    <div className="plumbing service-icon-img-container">
                        <p className='our-service-title'>Plumbing</p>
                        <img className='service-icon-img' src={PlumbingIcon} alt="plumbing" />
                    </div>
                    <div className="HVAC service-icon-img-container">
                        <p className='our-service-title'>HVAC</p>
                        <img className='service-icon-img' src={HVACIcon} alt="HVAC" />
                    </div>
                    <div className="solar service-icon-img-container">
                        <p className='our-service-title'>Solar</p>
                        <img className='service-icon-img' src={SolarIcon} alt="solar" />
                    </div>
                    <div className="tv service-icon-img-container">
                        <p className='our-service-title'>Direct TV</p>
                        <img className='service-icon-img' src={TVIcon} alt="tv" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeComp