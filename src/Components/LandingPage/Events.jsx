import { animate, useMotionValue, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import useMeasure from 'react-use-measure'
import event1 from '../../assets/Event/event1.webp'
import event2 from '../../assets/Event/event2.webp'
import event3 from '../../assets/Event/event3.webp'
import event4 from '../../assets/Event/problemSlide.webp'
import event5 from '../../assets/Event/event5.webp'
import event6 from '../../assets/Event/event6.webp'

import certificate1 from '../../assets/Event/certificate1.jpg'
import certificate2 from '../../assets/Event/certificate2.jpg'
import certificate3 from '../../assets/Event/certificate3.jpg'
import certificate4 from '../../assets/Event/certificate4.jpg'

const Events = () => {
    let [ref, { height }] = useMeasure()
    let [ref2, { height: height2 }] = useMeasure()

    const yTranslation = useMotionValue(0)
    const yTranslation2 = useMotionValue(0)

    useEffect(() => {
        let finalPosn = -height / 2 - 6
        let controls = animate(yTranslation, [0, finalPosn], {
            ease: "linear",
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0
        })

        return controls.stop
    }, [yTranslation, height])
    useEffect(() => {
        let finalPosn2 = height2 / 2
        let controls = animate(yTranslation2, [0, finalPosn2], {
            ease: "linear",
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0
        })

        return controls.stop
    }, [yTranslation2, height])




    return (
        <div id='event' className=' border-t-4 border-[#2158aa] relative bg-gradient-to-r from-gray-100 to-gray-300 scroll-snap pt-32 pb-20 flex flex-col min-h-[500px] gap-20 justify-center items-center'>
            <div className='bg-[#2158aa] absolute top-[-50px] w-[80%] flex items-center justify-center py-6'>
                <span className='text-4xl text-slate-200 raleway font-medium tracking-wide'>
                    A Decade of Trust and Commitment
                </span>
            </div>


            <div className='px-4'>
                <h3 className='text-7xl poppins font-semibold'>EVENTS AND AWARDS</h3>
            </div>


            <div className='w-full flex p-3 px-20 overflow-hidden relative'>
                <div className='relative w-1/3 h-[400px]'>
                    <motion.div className='w-full flex gap-3 flex-col items-center absolute top-0'
                        ref={ref}
                        style={{ y: yTranslation }}
                    >
                        <div className='w-[400px] h-[300px] flex justify-center items-center text-4xl'>
                            <img src={event1} alt="" />
                        </div>
                        <div className='w-[400px] h-[300px] flex justify-center items-center text-4xl'>
                            <img src={event2} alt="" />
                        </div>
                        <div className='w-[400px] h-[300px] flex justify-center items-center text-4xl'>
                            <img src={event3} alt="" />
                        </div>


                        <div className='w-[400px] h-[300px] flex justify-center items-center text-4xl'>
                            <img src={event1} alt="" />
                        </div>
                        <div className='w-[400px] h-[300px] flex justify-center items-center text-4xl'>
                            <img src={event2} alt="" />
                        </div>
                        <div className='w-[400px] h-[300px] flex justify-center items-center text-4xl'>
                            <img src={event3} alt="" />
                        </div>
                    </motion.div>
                </div>
                <div className='relative w-1/3 h-[400px]'>
                    <motion.div className='w-full flex flex-col justify-center absolute bottom-0 items-center'
                        ref={ref2}
                        style={{ y: yTranslation2 }}
                    >
                        <div className='w-[400px] h-[300px] flex justify-center items-center text-4xl'>
                            <img src={certificate1} alt="" />
                        </div>
                        <div className='w-[400px] h-[300px] flex justify-center items-center text-4xl'>
                            <img src={certificate2} alt="" />
                        </div>
                        <div className='w-[400px] h-[300px] flex justify-center items-center text-4xl'>
                            <img src={certificate3} alt="" />
                        </div>
                        <div className='w-[400px] h-[300px] flex justify-center items-center text-4xl'>
                            <img src={certificate4} alt="" />
                        </div>

                        <div className='w-[400px] h-[300px] flex justify-center items-center text-4xl'>
                            <img src={certificate1} alt="" />
                        </div>
                        <div className='w-[400px] h-[300px] flex justify-center items-center text-4xl'>
                            <img src={certificate2} alt="" />
                        </div>
                        <div className='w-[400px] h-[300px] flex justify-center items-center text-4xl'>
                            <img src={certificate3} alt="" />
                        </div>
                        <div className='w-[400px] h-[300px] flex justify-center items-center text-4xl'>
                            <img src={certificate4} alt="" />
                        </div>
                    </motion.div>
                </div>
                <div className='relative w-1/3 h-[400px]'>
                    <motion.div className='w-full flex flex-col gap-3 items-center absolute top-0'
                        ref={ref}
                        style={{ y: yTranslation }}
                    >
                        <div className='w-[400px] h-[300px] flex justify-center items-center text-4xl'>
                            <img src={event4} alt="" />
                        </div>
                        <div className='w-[400px] h-[300px] flex justify-center items-center text-4xl'>
                            <img src={event5} alt="" />
                        </div>
                        <div className='w-[400px] h-[300px] flex justify-center items-center text-4xl'>
                            <img src={event6} alt="" />
                        </div>


                        <div className='w-[400px] h-[300px] flex justify-center items-center text-4xl'>
                            <img src={event4} alt="" />
                        </div>
                        <div className='w-[400px] h-[300px] flex justify-center items-center text-4xl'>
                            <img src={event5} alt="" />
                        </div>
                        <div className='w-[400px] h-[300px] flex justify-center items-center text-4xl'>
                            <img src={event6} alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Events