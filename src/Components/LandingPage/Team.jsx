import React from 'react'
import AnimatedCarousel from './AnimatedCarousel'
import TeamSwiper from './TeamSwiper'

const Team = () => {
    return (
        <div id='team' className='scroll-snap relative min-h-[500px] bg-gradient-to-r from-gray-100 to-gray-300 flex flex-col pt-24 pb-20 gap-6 items-center justify-center'>
            <div className='flex flex-col items-center gap-6'>
                <span className='text-2xl bg-blue-950 text-white px-4 font-roboto font-bold tracking-wide py-3'>OUR TEAM</span>
                <h1 className='text-6xl text-black montserrat font-bold'>We Always Work With A Great Team</h1>
            </div>
            {/* <TeamSwiper /> */}
            <div className='relative h-[500px] w-[80%] mx-auto overflow-hidden'>
                <AnimatedCarousel />
            </div>
        </div>
    )
}

export default Team