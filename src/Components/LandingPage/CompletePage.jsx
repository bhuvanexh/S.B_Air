import React, { useEffect, useRef } from 'react'
import About from './About'
import AboutUs from './AboutUs'
import AnimatedLogo from './AnimatedLogo'
import ContactUs from './ContactUs'
import Events from './Events'
import HowWeWork from './HowWeWork'
import Impression from './Impression'
import Landing from './Landing'
import Products from './Products'
import Services from './Services'
import Team from './Team'

const CompletePage = () => {


    return (
        <>
            <div className='relative'>
                <AnimatedLogo />
                <div className='background-main relative'>
                    <Landing />
                    <AboutUs />
                    <About />
                    <HowWeWork />
                    <Products />
                    <Team />
                    <Events />
                    <Services />
                    <Impression />
                    <ContactUs />
                </div>
            </div>
        </>
    )
}

export default CompletePage