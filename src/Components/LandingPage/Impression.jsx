import { AnimatePresence, useInView, motion } from 'framer-motion'
import React from 'react'
import { useRef } from 'react'
import Counter from './Counter'
import Slideshow from './Slideshow'

const Impression = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
        <div id='impression' className='flex flex-col bg-white border-t border-black pt-16 items-center justify-center'>
            <div className='flex flex-col justify-center items-center gap-16'>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <span className='text-3xl poppins-light'>FOLLOW OUR</span>
                    <span className='text-6xl poppins-medium tracking-wide'>GLOBAL FOOTPRINT</span>
                </div>
                <div ref={ref} className="flex gap-5 items-start text-center">
                    <div className='flex flex-col items-center justify-center w-[300px]'>
                        <Counter from={0} to={500} isInView={isInView} />
                        <span className='text-xl poppins-semiLight'>HAPPY CUSTOMERS</span>
                    </div>
                    <div className='flex flex-col items-center justify-center w-[300px]'>
                        <Counter from={0} to={6} isInView={isInView} unit="CR" />
                        <span className='text-xl poppins-semiLight'>REVENUE GENERATED ANUALLY</span>
                    </div>
                    <div className='flex flex-col items-center justify-center w-[300px]'>
                        <Counter from={0} to={10} isInView={isInView} unit="YRS" />
                        <span className='text-xl poppins-semiLight'>OF CUSTOMER
                            CENTRIC INNOVATION</span>
                    </div>
                    <div className='flex flex-col items-center justify-center w-[300px]'>
                        <Counter from={0} to={12} isInView={isInView} />
                        <span className='text-xl poppins-semiLight'>DEDICATED EMPLOYEES</span>
                    </div>
                </div>
            </div>
            <div className='textParallax w-full h-[80vh] relative overflow-hidden'>
                <svg className="absolute inset-0" viewBox="0 0 100 60" preserveAspectRatio="none">
                    <defs>
                        <mask id="mask" x="0" y="0" width="100" height="50">
                            <rect x="0" y="0" width="100" height="40" fill="#fff" />
                            <text textAnchor="middle" x="50" y="25" dy="1" fontSize="20" className='parallax-text' fontWeight={600}>S.B AIR.</text>
                        </mask>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" mask="url(#mask)" fill="white" />
                </svg>
            </div>
            <div className='w-[100%] h-[300px] py-8 bg-[#262626] flex justify-center items-center'>
                <div className='w-[35%] flex flex-col text-5xl poppins-semiLight text-white'>
                    <span>
                        BRANDS THAT HAVE TRUSTED
                    </span>
                    <span>
                        US
                    </span>
                    <span>
                        OVER THE YEARS
                    </span>
                </div>
                <div className='relative w-[55%] h-full overflow-hidden'>
                    <Slideshow />
                </div>
            </div>
        </div >
    )
}

export default Impression