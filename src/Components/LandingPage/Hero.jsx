import React, { useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { useOutletContext } from 'react-router-dom'
const Hero = () => {
    const { loading } = useOutletContext()

    const controls = useAnimationControls()
    useEffect(() => {
        console.log(loading, 'hmm');
        if (!loading) {
            controls.start('move')
        }
    }, [loading])


    return (
        <div className='heroBg flex flex-col w-[80%] min-w-[900px] h-[100%] items-center justify-center text-white px-8'>

            <motion.p
                className='relative text-2xl flex gap-3 items-center raleway-regular mb-4'

                variants={{
                    initial: { y: -50, opacity: 0 },
                    move: { y: 0, opacity: 1 }
                }}

                initial="initial"
                animate={controls}
                transition={{ duration: 1, ease: "backInOut" }}

            >
                at
                <span className='text-4xl text-[#FFD54F]'>
                    S.B AIR ENGINEERS
                </span>
            </motion.p>

            <motion.h1
                className='relative raleway-medium text-9xl'
                variants={{
                    initial: { y: 100, opacity: 0 },
                    move: { y: 0, opacity: 1 }
                }}

                initial="initial"
                animate={controls}
                transition={{ duration: 1, ease: "backInOut" }}


            >
                WE KEEP YOU POWERED UP!
            </motion.h1>
        </div>
    )
}

export default Hero