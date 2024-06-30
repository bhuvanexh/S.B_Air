import React, { useEffect, useState } from 'react';
import logo1 from '../../assets/Services/01.webp'
import logo2 from '../../assets/Services/02.webp'
import logo3 from '../../assets/Services/03.webp'
import logo4 from '../../assets/Services/04.webp'
import logo5 from '../../assets/Services/05.webp'
import logo6 from '../../assets/Services/06.webp'
import { motion, useAnimate } from 'framer-motion'
const Card = ({ number, title, description }) => {
    let logos = [logo1, logo2, logo3, logo4, logo5, logo6]
    const [isHovered, setHovered] = useState(null)
    const [scope, animate] = useAnimate()

    useEffect(() => {
        const animateFilm = async () => {
            if (isHovered) {
                await animate(".film", {
                    transformOrigin: "right"
                })
                animate(".film", {
                    scaleX: 1,
                }, {
                    duration: .3,
                })
                animate(".logoSpin", {
                    rotate: [0, 360],
                    scale: [1, 0, 1],
                }, { duration: .5, ease: "linear" })
                console.log('this ran');
            }
            if (isHovered == false) {
                console.log('1 or 2');
                await animate(".film", {
                    transformOrigin: "left"
                })
                animate(".film", {
                    scaleX: 0,
                }, { duration: .3 })
                animate(".logoSpin", {
                    rotate: [360, 0],
                    scale: [1, 0, 1],
                }, { duration: .5, ease: "linear" })
            }
        }
        const animateLogo = async () => {
            if (isHovered) {
                animate(".film", {
                    transformOrigin: "right"
                })
                animate(".film", {
                    scaleX: 1,
                }, {
                    duration: .3,
                })
                animate(".film", {
                    transformOrigin: "left"
                })
            }
            if (isHovered == false) {
                await animate(".film", {
                    scaleX: 0,
                }, { duration: .3 })
            }
        }
        animateFilm()
    })
    return (
        <motion.div className='w-[350px] h-[280px] relative bg-[#E6F0F8] cursor-pointer border p-5 flex flex-col gap-3'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            ref={scope}
            whileHover={{ scale: 1.05 }}
        >
            <motion.div
                className='film absolute bg-red-500 inset-0 origin-right'
                style={{ scaleX: 0 }}
            ></motion.div>
            <div className='flex items-center justify-between z-10'>
                <motion.span className='logoSpin block w-[55px] p-3 bg-slate-300 rounded-[50%]'><img className='block w-full' src={logos[Number(number[1]) - 1]} alt="" /></motion.span>
                <span className="text-5xl font-bold text-transparent" style={{ WebkitTextStroke: '1px black', textStroke: '1px black' }}>{number}</span>
            </div>
            <div className='flex flex-col gap-2 z-10'>
                <h5 className='text-3xl text-[#333333] font-semibold font-sans'>{title}</h5>
                <p className='text-[#555555]'>{description}</p>
            </div>
        </motion.div>
    );
};

export default Card;
