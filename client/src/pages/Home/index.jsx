import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from '../../components/HomePageComponent/HeroSection'
import OurMenuSection from '../../components/HomePageComponent/OurMenuSection'
import WelcomeSection from '../../components/HomePageComponent/WelcomeSection'
import Testimonials from '../../components/HomePageComponent/Testimonials'
import ServicesSection from '../../components/HomePageComponent/ServicesSection'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>

            </Helmet>

            <HeroSection/>
            <WelcomeSection/>
            <Testimonials/>
            <ServicesSection/>
            <OurMenuSection/>
            
        </>
    )
}

export default Home