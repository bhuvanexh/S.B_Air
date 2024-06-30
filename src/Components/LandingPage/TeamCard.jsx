import { useAnimate, motion } from 'framer-motion'
import React, { useState } from 'react'
import { useEffect } from 'react'
import curve from '../../assets/curve.png'

const TeamCard = ({ image, name, post, number }) => {
    const [isHovered, setHovered] = useState(null)
    const [scope, animate] = useAnimate()
    useEffect(() => {
        if (isHovered) {
            console.log('hovered');
            animate('.curve',
                { bottom: 0 },
                { duration: .3 }
            )
            animate('.gradient',
                { bottom: 0 },
                { duration: .3 }
            )
        }
        if (!isHovered) {
            animate('.curve',
                { bottom: "-200px" },
                { duration: .3 }
            )
            animate('.gradient',
                { bottom: "-100%" },
                { duration: .3 }
            )
        }
    })



    return (
        <motion.div className='w-[350px] h-[500px] rounded-xl flex items-start bg-slate-400 relative overflow-hidden cursor-pointer'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileHover={{ scale: 1.1, transition: { duration: .3 } }}
            ref={scope}
        >
            <img className='block w-full' src={image} alt="" />
            <motion.div className='gradient absolute w-full h-full bottom-[-100%] bg-gradient-to-t from-[#710101] to-[#82000000]'></motion.div>
            <motion.div className='curve absolute w-full z-20 bottom-[-200px]'>
                <img className='block w-full' src={curve} alt="" />
                <div className='absolute bottom-0 flex flex-col py-3 px-5 text-white lato'>
                    <span className='text-2xl font-semibold'>{name}</span>
                    <span className='text-xl'>{post}</span>
                    <span className='text-xl'>{number}</span>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default TeamCard