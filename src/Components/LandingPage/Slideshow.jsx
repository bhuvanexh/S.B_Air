import React from 'react'
import { animate, motion, useMotionValue } from 'framer-motion'
import useMeasure from 'react-use-measure'
import { useEffect } from 'react'

import comp1 from '../../assets/comp/comp1.webp'
import comp2 from '../../assets/comp/comp2.webp'
import comp3 from '../../assets/comp/comp3.webp'
import comp4 from '../../assets/comp/comp4.webp'
import comp5 from '../../assets/comp/comp5.webp'
import comp6 from '../../assets/comp/comp6.webp'
import comp7 from '../../assets/comp/comp7.webp'
import comp8 from '../../assets/comp/comp8.webp'
import comp9 from '../../assets/comp/comp9.webp'
import comp10 from '../../assets/comp/comp10.webp'
import comp11 from '../../assets/comp/comp11.webp'
import comp12 from '../../assets/comp/comp12.webp'
import comp13 from '../../assets/comp/comp13.webp'
import comp14 from '../../assets/comp/comp14.webp'
import comp15 from '../../assets/comp/comp15.webp'
import comp16 from '../../assets/comp/comp16.webp'
import comp17 from '../../assets/comp/comp17.webp'
import comp18 from '../../assets/comp/comp18.webp'
import comp19 from '../../assets/comp/comp19.webp'
import comp20 from '../../assets/comp/comp20.webp'


const Slideshow = () => {

    let [ref, { width }] = useMeasure()

    const xTranslation = useMotionValue(0)

    useEffect(() => {
        let finalPosn = -width / 2 - 32
        let controls = animate(xTranslation, [0, finalPosn], {
            ease: "linear",
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0
        })

        return controls.stop
    }, [xTranslation, width])


    return (
        <motion.div className='absolute left-0 flex text-white items-center gap-16 h-full'
            ref={ref}
            style={{ x: xTranslation }}
        >
            <motion.div
                className='text-6xl w-[120px]'
            >
                <img className='w-full' src={comp1} alt="" />
            </motion.div>
            <motion.div
                className='text-6xl w-[120px]'
            >
                <img className='w-full' src={comp2} alt="" />
            </motion.div>
            <motion.div
                className='text-6xl w-[120px]'
            >
                <img className='w-full' src={comp3} alt="" />
            </motion.div>
            <motion.div
                className='text-6xl w-[120px]'
            >
                <img className='w-full' src={comp4} alt="" />
            </motion.div>
            <motion.div
                className='text-6xl w-[120px]'
            >
                <img className='w-full' src={comp5} alt="" />
            </motion.div>



            <motion.div
                className='text-6xl w-[120px]'
            >
                <img className='w-full' src={comp1} alt="" />
            </motion.div>
            <motion.div
                className='text-6xl w-[120px]'
            >
                <img className='w-full' src={comp2} alt="" />
            </motion.div>
            <motion.div
                className='text-6xl w-[120px]'
            >
                <img className='w-full' src={comp3} alt="" />
            </motion.div>
            <motion.div
                className='text-6xl w-[120px]'
            >
                <img className='w-full' src={comp4} alt="" />
            </motion.div>
            <motion.div
                className='text-6xl w-[120px]'
            >
                <img className='w-full' src={comp5} alt="" />
            </motion.div>
        </motion.div>
    )
}

export default Slideshow